# 🚀 GitHub Repositories Explorer

A **GitHub Repositories Explorer** built with **React, Redux Toolkit, and Vitest**. This app allows users to search for GitHub users and view their repositories.

---

## 📌 Features
✅ Search GitHub users  
✅ View repositories with details (stars, description, links)  
✅ Expand/collapse user repositories  
✅ Fully tested with unit and integration tests  

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Bootstrap 5  
- **State Management:** Redux Toolkit, Redux Thunks  
- **Testing:** Vitest, React Testing Library, axios-mock-adapter  
- **Build Tool:** Vite  

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### **2️⃣ Install Dependencies**
```sh
yarn install
```

### **3️⃣ Run the Development Server**
```sh
yarn dev
```
Then open **`http://localhost:5173/`** in your browser.

### **4️⃣ Run Tests**
#### **Unit & Integration Tests**
```sh
yarn test
```

#### **Test Coverage**
```sh
yarn test --coverage
```
To exclude files from coverage, update `vite.config.ts`.

---

## 🚀 Deployment

### **Deploy to GitHub Pages**
1. Set `"homepage"` in `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY"
   ```
2. Run:
   ```sh
   yarn deploy
   ```
3. Your app will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
   ```

---

## 📄 License
This project is licensed under the **MIT License**.

---