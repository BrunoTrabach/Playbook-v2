async function loadComponent(id, file) {
  const el = document.getElementById(id);

  if (!el) {
    console.warn("Elemento não encontrado:", id);
    return;
  }

  try {
    const res = await fetch(file);

    if (!res.ok) {
      throw new Error("Falha ao carregar: " + file);
    }

    const html = await res.text();
    el.innerHTML = html;

  } catch (err) {
    console.error("Erro no loadComponent:", err);
    el.innerHTML = "<p style='color:red;'>Erro ao carregar módulo.</p>";
  }
}
