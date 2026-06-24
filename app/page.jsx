import { headers } from "next/headers";
import Script from "next/script";

// ─── Secciones de la app (tarea 7: eliminar dangerouslySetInnerHTML) ──────────

function Topbar() {
  return (
    <header className="topbar">
      <a className="brand" href="#app" aria-label="Linux Quest inicio">
        <span className="brand-mark">LQ</span>
        <span>Linux Quest</span>
      </a>
      <nav className="topnav" aria-label="Secciones principales">
        <button className="active" type="button" data-view-target="perfil">Perfil</button>
        <button type="button" data-view-target="aprendizaje">Aprendizaje</button>
        <button type="button" data-view-target="laboratorio">Laboratorio</button>
        <button type="button" data-view-target="recursos">Recursos</button>
        <button type="button" data-view-target="mapa">Mapa</button>
      </nav>
      <div className="global-search">
        <input id="globalSearch" type="search" placeholder="Buscar en todo" />
        <div id="globalSearchResults" className="global-search-results" aria-live="polite" />
      </div>
      <button className="account-button" id="accountButton" type="button">Entrar</button>
      <button
        className="icon-button"
        id="resetProgress"
        type="button"
        title="Reiniciar progreso"
        aria-label="Reiniciar progreso"
      >↺</button>
    </header>
  );
}

function AuthModal() {
  return (
    <div className="auth-modal hidden" id="authModal" role="dialog" aria-modal="true" aria-labelledby="authModalTitle">
      <div className="auth-backdrop" data-close-auth />
      <section className="auth-dialog">
        <button className="modal-close" type="button" data-close-auth aria-label="Cerrar">×</button>
        <div className="auth-copy">
          <p className="eyebrow">Tu cuenta</p>
          <h2 id="authModalTitle">Guarda tu avance</h2>
          <p id="authStatus">Sin sesión: el progreso se guarda solo en este navegador.</p>
        </div>
        <div className="auth-forms" id="authForms">
          <form className="auth-form" id="loginForm">
            <h3>Entrar</h3>
            <input name="email" type="email" placeholder="Email" autoComplete="email" required />
            <input name="password" type="password" placeholder="Contraseña" autoComplete="current-password" required />
            <button type="submit">Iniciar sesión</button>
          </form>
          <form className="auth-form" id="registerForm">
            <h3>Crear cuenta</h3>
            <input name="name" type="text" placeholder="Nombre" autoComplete="name" required />
            <input name="email" type="email" placeholder="Email" autoComplete="email" required />
            <input name="password" type="password" placeholder="Contraseña mínimo 8 caracteres" autoComplete="new-password" required />
            <button type="submit">Registrarme</button>
          </form>
        </div>
        <div className="auth-actions hidden" id="authActions">
          <button className="complete-button" id="syncProgress" type="button">Guardar avance</button>
          <button className="secondary-action" id="logoutButton" type="button">Cerrar sesión</button>
        </div>
        <p className="quiz-feedback" id="authFeedback" />
      </section>
    </div>
  );
}

function VistaPerfil() {
  return (
    <section className="app-view active" id="vista-perfil" data-view="perfil">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Panel del estudiante</p>
          <h1>Perfil y progreso</h1>
        </div>
        <button className="primary-action" type="button" data-view-target="aprendizaje">
          Ir a aprendizaje
        </button>
      </div>

      <section className="dashboard" aria-label="Panel de progreso">
        <article>
          <span className="stat-label">Progreso</span>
          <strong id="progressPercent">0%</strong>
          <div className="meter" aria-hidden="true"><span id="progressBar" /></div>
        </article>
        <article>
          <span className="stat-label">Módulos completados</span>
          <strong id="completedCount">0 / 0</strong>
        </article>
        <article>
          <span className="stat-label">Nivel actual</span>
          <strong id="currentRank">Explorador</strong>
        </article>
        <article>
          <span className="stat-label">Modo</span>
          <div className="segmented" role="group" aria-label="Dificultad del contenido">
            <button className="active" type="button" data-mode="kid">Simple</button>
            <button type="button" data-mode="pro">Técnico</button>
          </div>
        </article>
      </section>

      <section className="learning-dashboard" id="panelEstudiante" aria-label="Panel del estudiante">
        <article className="next-step-card">
          <p className="eyebrow">Siguiente paso</p>
          <h2 id="nextStepTitle">Continúa tu ruta</h2>
          <p id="nextStepDetail">Empieza por el primer módulo y marca avances para recibir recomendaciones.</p>
          <div className="next-step-actions">
            <button className="complete-button" id="continueLearning" type="button">Continuar donde quedé</button>
            <button className="secondary-action" id="recommendedRoute" type="button">Ver recomendación</button>
          </div>
        </article>
        <article className="student-insight-card">
          <p className="eyebrow">Diagnóstico</p>
          <h3 id="studentInsightTitle">Ruta inicial</h3>
          <p id="studentInsightText">Completa algunos módulos para detectar áreas fuertes y pendientes.</p>
        </article>
        <article className="achievement-card">
          <p className="eyebrow">Logros</p>
          <div id="achievementList" />
        </article>
      </section>

      <section className="profile-panel hidden" id="profilePanel" aria-label="Perfil del estudiante">
        <div className="profile-summary">
          <p className="eyebrow">Perfil de estudiante</p>
          <h2 id="profileName">Estudiante</h2>
          <p id="profileMeta">Configura tu perfil para personalizar tu ruta.</p>
          <div className="profile-stats">
            <span><strong id="profileProgress">0%</strong> avance</span>
            <span><strong id="profileCompleted">0</strong> módulos listos</span>
            <span><strong id="profileRank">Explorador</strong> nivel</span>
          </div>
        </div>
        <form className="profile-form" id="profileForm">
          <label>
            Nombre visible
            <input name="displayName" type="text" maxLength={80} required />
          </label>
          <label>
            Tipo
            <select name="role">
              <option>Estudiante</option>
              <option>Administrador</option>
              <option>Docente</option>
              <option>Autodidacta</option>
            </select>
          </label>
          <label>
            Nivel
            <select name="level">
              <option>Inicial</option>
              <option>Básico</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>
          </label>
          <label>
            Meta
            <input name="goal" type="text" maxLength={120} placeholder="Ej: administrar servidores" />
          </label>
          <label className="profile-bio">
            Descripción
            <textarea name="bio" maxLength={300} rows={3} placeholder="Qué quieres aprender o practicar" />
          </label>
          <button type="submit">Guardar perfil</button>
        </form>
      </section>
    </section>
  );
}

function VistaAprendizaje() {
  return (
    <section className="app-view" id="vista-aprendizaje" data-view="aprendizaje">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Aprendizaje</p>
          <h1>Ruta de módulos</h1>
        </div>
        <button className="secondary-action" type="button" data-view-target="laboratorio">
          Abrir laboratorio
        </button>
      </div>

      <section className="workspace" id="ruta">
        <aside className="module-list" aria-label="Módulos de aprendizaje">
          <div className="section-heading">
            <p className="eyebrow">Ruta ordenada</p>
            <h2>Módulos</h2>
          </div>
          <div className="stage-filter" id="stageFilter" aria-label="Filtrar módulos por nivel" />
          <div id="moduleList" />
        </aside>

        <section className="lesson-panel" aria-live="polite">
          <div className="lesson-head">
            <div>
              <p className="eyebrow" id="moduleStage">Nivel</p>
              <h2 id="moduleTitle">Selecciona un módulo</h2>
            </div>
            <button className="complete-button" id="completeModule" type="button">Marcar listo</button>
          </div>

          <div className="lesson-grid">
            <article className="lesson-block">
              <h3>Idea central</h3>
              <p id="moduleIntro" />
            </article>
            <article className="lesson-block">
              <h3>Lo que dominarás</h3>
              <ul id="moduleTopics" />
            </article>
            <article className="lesson-block">
              <h3>Misión práctica</h3>
              <p id="moduleMission" />
            </article>
            <article className="lesson-block">
              <h3>Comandos clave</h3>
              <div className="command-chips" id="moduleCommands" />
            </article>
          </div>

          <div className="guided-practice">
            <div>
              <p className="eyebrow">Ejercicio guiado</p>
              <h3>Practica este módulo paso a paso</h3>
            </div>
            <ol id="guidedSteps" />
          </div>

          <div className="evaluated-practice">
            <div>
              <p className="eyebrow">Práctica evaluada</p>
              <h3 id="practicePrompt">Escribe el comando adecuado</h3>
            </div>
            <form id="practiceForm" autoComplete="off">
              <input id="practiceInput" spellCheck={false} placeholder="Escribe un comando" />
              <button type="submit">Comprobar</button>
            </form>
            <p className="quiz-feedback" id="practiceFeedback" />
          </div>

          <div className="quiz" id="quizBox">
            <div>
              <p className="eyebrow">Reto rápido</p>
              <h3 id="quizQuestion" />
            </div>
            <div id="quizOptions" />
            <p className="quiz-feedback" id="quizFeedback" />
          </div>
        </section>
      </section>
    </section>
  );
}

function VistaLaboratorio() {
  return (
    <section className="app-view" id="vista-laboratorio" data-view="laboratorio">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Laboratorio seguro</p>
          <h1>Terminal simulada</h1>
        </div>
      </div>
      <section className="lab" id="laboratorio">
        <div className="terminal-wrap">
          <div className="terminal-toolbar">
            <span /><span /><span />
            <button id="clearTerminal" type="button">Limpiar</button>
          </div>
          <pre id="terminalOutput" aria-live="polite" />
          <form id="terminalForm" autoComplete="off">
            <label htmlFor="terminalInput">quest@linux:~$</label>
            <input
              id="terminalInput"
              name="terminalInput"
              spellCheck={false}
              placeholder="prueba: ls, pwd, cd, cat, chmod, ps, systemctl, grep"
            />
          </form>
        </div>
      </section>
    </section>
  );
}

function VistaRecursos() {
  return (
    <section className="app-view" id="vista-recursos" data-view="recursos">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Recursos</p>
          <h1>Rutas, chuleta y comandos</h1>
        </div>
      </div>

      <section className="goal-routes" id="objetivos">
        <div className="section-heading">
          <p className="eyebrow">Rutas por objetivo</p>
          <h2>Elige para qué quieres usar Linux</h2>
          <p className="section-intro">
            Cada ruta agrupa módulos útiles para una meta concreta y te permite saltar directo al primer tema recomendado.
          </p>
        </div>
        <div id="goalRoutes" />
      </section>

      <section className="cheatsheet" id="chuleta">
        <div className="section-heading">
          <p className="eyebrow">Repaso rápido</p>
          <h2>Chuleta de comandos</h2>
          <p className="section-intro">
            Tabla compacta para estudiar comandos por categoría, propósito y ejemplo antes de ir al blog completo.
          </p>
        </div>
        <input className="search" id="cheatSearch" type="search" placeholder="Filtrar chuleta: permisos, red, grep, paquetes..." />
        <div className="cheat-table-wrap">
          <table className="cheat-table">
            <thead>
              <tr>
                <th>Comando</th>
                <th>Categoría</th>
                <th>Para qué sirve</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody id="cheatRows" />
          </table>
        </div>
      </section>

      <section className="command-blog" id="comandos">
        <div className="section-heading">
          <p className="eyebrow">Blogs prácticos</p>
          <h2>Comandos Linux</h2>
          <p className="section-intro">
            Explora los comandos por clasificación: navegación, archivos, permisos, procesos, red, servicios, almacenamiento, seguridad y automatización.
          </p>
        </div>
        <div className="command-blog-layout">
          <aside className="command-browser" aria-label="Lista de comandos con blog">
            <div className="command-category-list" id="commandCategoryList" aria-label="Clasificación de comandos" />
            <input className="search" id="commandSearch" type="search" placeholder="Buscar comando: grep, systemctl, tcpdump..." />
            <div id="commandBlogList" />
          </aside>
          <article className="command-article" id="commandArticle" aria-live="polite" />
        </div>
      </section>
    </section>
  );
}

function VistaMapa() {
  return (
    <section className="app-view" id="vista-mapa" data-view="mapa">
      <div className="view-heading">
        <div>
          <p className="eyebrow">Vista completa</p>
          <h1>Mapa y glosario</h1>
        </div>
      </div>

      <section className="two-column">
        <div className="glossary" id="glosario">
          <div className="section-heading">
            <p className="eyebrow">Diccionario vivo</p>
            <h2>Glosario</h2>
          </div>
          <input className="search" id="glossarySearch" type="search" placeholder="Buscar: kernel, shell, inode, cgroup..." />
          <div id="glossaryList" />
        </div>

        <div className="map" id="mapa">
          <div className="section-heading">
            <p className="eyebrow">Vista completa</p>
            <h2>Mapa de dominio</h2>
            <p className="section-intro">
              Una vista rápida para entender qué temas forman Linux y saltar directamente al módulo que quieres estudiar.
            </p>
          </div>
          <div id="knowledgeMap" />
          <div className="area-evaluation" id="areaEvaluation" />
        </div>
      </section>
    </section>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────

export default async function Home() {
  // Leer el nonce generado por middleware.js para aplicarlo al script legacy
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") ?? "";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-[1800px] gap-4 px-4 py-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-6 lg:py-6">
        {/* Sidebar */}
        <aside className="hidden rounded-[20px] border border-slate-800/80 bg-slate-950/90 p-4 shadow-2xl shadow-black/30 lg:sticky lg:top-6 lg:block lg:h-[calc(100vh-3rem)]">
          <div className="flex h-full flex-col gap-4">
            <div className="rounded-[18px] border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Linux Quest</p>
            </div>
            <nav className="grid gap-2">
              <a className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800" href="#vista-perfil">Perfil</a>
              <a className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800" href="#vista-aprendizaje">Aprendizaje</a>
              <a className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800" href="#vista-laboratorio">Laboratorio</a>
              <a className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800" href="#vista-recursos">Recursos</a>
              <a className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800" href="#vista-mapa">Mapa</a>
            </nav>
          </div>
        </aside>

        {/* Contenido principal */}
        <section className="min-w-0 rounded-[20px] border border-slate-800/80 bg-slate-950/70 shadow-2xl shadow-black/25">
          <div className="border-b border-slate-800/80 bg-slate-950/90 px-4 py-4 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Linux Quest</p>
                <p className="mt-1 text-sm text-slate-400">Ruta práctica de comandos Linux</p>
              </div>
            </div>
          </div>

          {/* Vistas de la app — ahora JSX real, sin dangerouslySetInnerHTML */}
          <Topbar />
          <AuthModal />
          <main id="app">
            <VistaPerfil />
            <VistaAprendizaje />
            <VistaLaboratorio />
            <VistaRecursos />
            <VistaMapa />
          </main>
        </section>
      </div>

      {/* Script legacy con nonce para CSP — evita 'unsafe-inline' */}
      <Script src="/legacy-script.js" strategy="afterInteractive" nonce={nonce} />
    </div>
  );
}
