<h1>Applicazione Web di Gestione dei Contatti</h1>
<p>Si tratta di una semplice applicazione web progettata per la gestione di un elenco di contatti. 
Consente di organizzare e memorizzare informazioni sui tuoi contatti, tra cui il loro nome, cognome, genere, data di nascita, numero di telefono, email e città. 
L'applicazione garantisce l'integrità dei dati con campi obbligatori e controlli di convalida e memorizza i dati in un database SQL per un facile accesso e gestione. Inoltre, puoi visualizzare, modificare e aggiungere nuovi contatti con facilità.</p>

<h2>Caratteristiche</h2>
    <ul>
        <li><strong>Nome</strong>: Un campo per inserire il nome del contatto.</li>
        <li><strong>Cognome</strong>: Un campo per inserire il cognome del contatto.</li>
        <li><strong>Genere</strong>: Una casella a discesa con le opzioni "Maschio" e "Femmina" per selezionare il genere del contatto.</li>
        <li><strong>Data di Nascita</strong>: Un campo per inserire la data di nascita del contatto.</li>
        <li><strong>Numero di Telefono</strong>: Un campo per inserire il numero di telefono del contatto.</li>
        <li><strong>Email</strong>: Un campo per inserire l'indirizzo email del contatto.</li>
        <li><strong>Città</strong>: Una casella a discesa con un elenco di città, prepopulate da una fonte esterna.</li>
    </ul>

<h2>Convalida e Requisiti</h2>
    <ul>
        <li><strong>Campi Obbligatori</strong>: Nome, Cognome, Genere ed Email sono campi obbligatori.</li>
        <li><strong>Convalida Email</strong>: Il campo Email impone una convalida per assicurare un formato di indirizzo email valido.</li>
        <li><strong>Convalida Numero di Telefono</strong>: Il campo Numero di Telefono impone una convalida per assicurare un formato di numero di telefono valido.</li>
    </ul>

<h2>Interfaccia Utente</h2>
    <ul>
        <li><strong>Visualizzazione Tabellare</strong>: Puoi visualizzare tutti i tuoi contatti in un formato tabellare.</li>
        <li><strong>Aggiunta e Modifica Contatti</strong>: L'applicazione fornisce moduli per inserire nuovi contatti e modificare quelli esistenti.</li>
    </ul>

<h2>Tecnologie Utilizzate</h2>
    <p>Questa applicazione web è costruita utilizzando tecnologie web moderne, rendendola reattiva e accessibile su vari dispositivi. La pila tecnologica può includere:</p>
    <ul>
        <li><strong>Frontend</strong>: HTML, CSS, JavaScript e un framework/libreria frontend come React per un'interfaccia utente reattiva.</li>
        <li><strong>Backend</strong>: Una tecnologia lato server come Node.js e Express (entrambi framework JavaScript).</li>
        <li><strong>Database</strong>: Un sistema di database SQL (PostgreSQL) per la memorizzazione dei dati.</li>
        <li><strong>Convalida</strong>: Convalida lato frontend e lato backend per campi obbligatori e integrità dei dati.</li>
        <li><strong>Fonte Dati Esterna</strong>: Una fonte esterna per la precompilazione della casella a discesa delle città.</li>
    </ul>

<h2>Prerequisiti</h2>
<p>Prima di poter eseguire questa applicazione web, assicurati di avere il software e le dipendenze seguenti installati sul tuo computer locale:</p>

<ul>
  <li><a href="https://nodejs.org/" target="_blank">Node.js</a>: Questa applicazione richiede Node.js per eseguire il server backend e il server di sviluppo frontend. Puoi scaricare e installare Node.js dal sito ufficiale.</li>
  <li><a href="https://www.npmjs.com/" target="_blank">npm</a> (Node Package Manager): npm è incluso in Node.js ed è utilizzato per gestire le dipendenze del progetto. Assicurati di avere npm installato.</li>
</ul>

<p>Verifica di avere le versioni necessarie installate eseguendo i seguenti comandi nel tuo terminale:</p>
<pre><code>node --version</code></pre>
<pre><code>npm --version</code></pre>

<!-- Clone the Repository -->
<h2>Clona il Repository</h2>
<p>Per iniziare, clona questo repository sul tuo ambiente locale usando Git. Apri il tuo terminale ed esegui il seguente comando:</p>
<pre><code>git clone &lt;repository-url&gt;</code></pre>
<p>Sostituisci <code>&lt;repository-url&gt;</code> con l'URL di questo repository. Puoi trovare l'URL facendo clic sul pulsante "Clona" o "Code" in questa pagina.</p>
<p>Una volta clonato il repository, puoi procedere con la configurazione dei componenti backend e frontend dell'applicazione web.</p>

<!-- Setting Up the Backend and Frontend -->
<h2>Configura il Backend e il Frontend</h2>
<p>Dopo aver clonato il repository, dovrai configurare sia i componenti backend che frontend dell'applicazione web. Segui i passaggi seguenti:</p>

<!-- Backend Setup -->
<h3>Configurazione del Backend</h3>
<ol>
  <li>Apri il tuo terminale e naviga nella directory <code>./backend/</code> all'interno del repository clonato usando il comando <code>cd</code>:</li>
  <pre><code>cd ./backend/</code></pre>
  <li>Installa i pacchetti Node.js necessari eseguendo:</li>
  <pre><code>npm install</code></pre>
  <li>Configura il server backend. Potresti dover impostare le variabili d'ambiente per i dettagli della connessione al database, le chiavi API o altre configurazioni necessarie. Fai riferimento alla documentazione fornita per le opzioni di configurazione.</li>
  <li>Avvia il server backend eseguendo:</li>
  <pre><code>npm start</code></pre>
</ol>

<!-- Frontend Setup -->
<h3>Configurazione del Frontend</h3>
<ol>
  <li>Apri una nuova finestra del terminale e naviga nella directory <code>./frontend/</code> all'interno del repository clonato:</li>
  <pre><code>cd ./frontend/</code></pre>
  <li>Installa i pacchetti frontend necessari eseguendo:</li>
  <pre><code>npm install</code></pre>
  <li>Configura l'applicazione frontend, che potrebbe comportare la specifica degli endpoint API o altre impostazioni. Fai riferimento alla documentazione fornita per le opzioni di configurazione.</li>
  <li>Avvia il server di sviluppo frontend con:</li>
  <pre><code>npm start</code></pre>
</ol>

<p>Con entrambi i componenti backend e frontend configurati, puoi accedere all'applicazione web nel tuo browser e iniziare a usarla per gestire i tuoi contatti.</p>
