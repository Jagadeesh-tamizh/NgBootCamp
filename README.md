# [🚀 NgBootCamp](https://ngbootcamp.netlify.app/home)

An **Angular Bootcamp Playground** project where we explore Angular features step by step with practical demos, clean UI, and modular examples.  
This project is built using **Angular Standalone Components**, styled with **LESS**, and organized for easy learning.

---

## 📚 Features Covered

### ✅ Basics
- **Components** – building reusable UI blocks with parent–child communication.
- **Directives** – demos for `*ngIf`, `*ngFor`, `ngClass`, and a custom `HighlightDirective`.

### ✅ Reactivity
- **Signals** – Angular’s modern reactivity model.
  - Signals for state
  - Computed values
  - Effects for side reactions

### ✅ Services & Dependency Injection
- Shared `CounterService` example.
- Box A & Box B demo with injected service.
- Showcasing Angular’s `inject()` function.

### ✅ Pipes
- Custom `ReversePipe`.
- Built-in pipe usage in a `pipes-demo` component.

---

## 🖼 UI Overview

- **Navigation Bar** with emojis for quick access:
  - 🧩 Services
  - 📡 Signals
  - 📐 Directives
  - 🔄 Pipes  
- **Home Page** with interactive **cards** linking to each feature.
- Consistent **card-based styling** and buttons.

---

## 🛠 Tech Stack

- **Angular 18+** (Standalone APIs)
- **TypeScript**
- **LESS** for styling
- **Angular Router**
- **Signals API**

---

## ▶️ Running the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/Jagadeesh-tamizh/NgBootCamp.git
   cd NgBootCamp
   ````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the dev server:

   ```bash
   ng serve
   ```

4. Open [http://localhost:4200](http://localhost:4200) 🎉

---

## 📂 Project Structure

```
src/
 ├─ app/
 │   ├─ core/                     # Core services (e.g., CounterService)
 │   ├─ features/                 # Feature demos
 │   │   ├─ component-communication/
 │   │   │   ├─ child-box/
 │   │   │   ├─ parent-box/
 │   │   │   └─ component-communication/
 │   │   ├─ directives/           # Directive demos + HighlightDirective
 │   │   ├─ home/                 # Landing page with cards
 │   │   ├─ pipes/                # Pipes feature
 │   │   │   ├─ components/pipes-demo/
 │   │   │   └─ pipes/            # ReversePipe
 │   │   ├─ service-demo/         # Service & DI demo
 │   │   │   ├─ box-a/
 │   │   │   ├─ box-b/
 │   │   │   └─ service-demo/
 │   │   └─ signals/              # Signals demo
 │   ├─ shared/                   # Shared UI (e.g., Navbar)
 │   │   └─ navbar/
 │   ├─ app.component.*           # Root app
 │   ├─ app.routes.ts             # Routes
 │   ├─ app.config.ts             # App configuration
 │   └─ app.config.server.ts
 ├─ assets/                       # Static assets
 ├─ index.html
 ├─ styles.less                   # Global styles
 ├─ main.ts                       # Browser bootstrap
 └─ main.server.ts                # Server bootstrap
```

---

## 📖 Learning Goals

* Practice **Angular standalone architecture** (no NgModules).
* Understand **data flow** between parent & child components.
* Explore **reusability** with directives, pipes, and services.
* Master **Signals** for reactivity.
* Build intuition around **Dependency Injection**.

---

## 🌟 Next Steps

* Add **Forms (Reactive & Template-driven)**.
* Add **Route Guards & Lazy Loading**.
* Demo **HTTPClient** with mock API.

---

## 👤 Author

Built by **Jagadeesh T** with hands-on Angular exploration 🚀

