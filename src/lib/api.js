const BASE_URL = "http://localhost:3009";
const RESOURCE = "/movies";
const LS_KEY = "movies_local";

let useServer = null; // null = necunoscut, true/false = memorat după primul check

async function pingJsonServer() {
  if (useServer !== null) return useServer;
  try {
    const res = await fetch(`${BASE_URL}${RESOURCE}`, { method: "GET" });
    useServer = res.ok;
  } catch {
    useServer = false;
  }
  return useServer;
}

// -------- Helpers localStorage + /public/db.json --------
function getLocal() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setLocal(movies) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(movies));
  } catch {}
}

async function loadFromPublicDb() {
  // /public/db.json poate fi { movies: [...] } sau direct [...]
  try {
    const res = await fetch("/db.json");
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : data.movies || [];
  } catch {
    return [];
  }
}

function computeNextId(movies) {
  if (!movies?.length) return 1;
  return Math.max(...movies.map(m => Number(m.id) || 0)) + 1;
}

// -------- API public --------
export async function loadMoviesInitial() {
  // 1) Încearcă json-server o singură dată (și memorează rezultatul)
  if (await pingJsonServer()) {
    const res = await fetch(`${BASE_URL}${RESOURCE}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    // Sincronizează și fallback-ul local
    setLocal(data);
    return data;
  }

  // 2) Fallback: localStorage -> /public/db.json
  const local = getLocal();
  if (local) return local;

  const fromPublic = await loadFromPublicDb();
  setLocal(fromPublic); // cache local pentru următoarele porniri
  return fromPublic;
}

export async function createMovie(movie) {
  if (await pingJsonServer()) {
    const res = await fetch(`${BASE_URL}${RESOURCE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const created = await res.json();
    return created;
  }

  // Fallback local
  const all = getLocal() ?? (await loadFromPublicDb());
  const created = { ...movie, id: computeNextId(all) };
  const updated = [...all, created];
  setLocal(updated);
  return created;
}

export async function updateMovie(id, patch) {
  if (await pingJsonServer()) {
    const res = await fetch(`${BASE_URL}${RESOURCE}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const updated = await res.json();
    return updated;
  }

  // Fallback local
  const all = getLocal() ?? (await loadFromPublicDb());
  const updatedList = all.map(m => String(m.id) === String(id) ? { ...m, ...patch } : m);
  setLocal(updatedList);
  return updatedList.find(m => String(m.id) === String(id));
}

export async function deleteMovie(id) {
  if (await pingJsonServer()) {
    const res = await fetch(`${BASE_URL}${RESOURCE}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return true;
  }

  // Fallback local
  const all = getLocal() ?? (await loadFromPublicDb());
  const updated = all.filter(m => String(m.id) !== String(id));
  setLocal(updated);
  return true;
}