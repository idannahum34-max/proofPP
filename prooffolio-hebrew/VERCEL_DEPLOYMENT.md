# הוראות העלאה ל-Vercel

## 🚀 שלבים להעלאה

### שלב 1: הכנה בGit

```bash
# וודא שאתה בתיקיית הפרויקט
cd prooffolio-hebrew

# בדוק את הקבצים שלך
git status

# הוסף את כל הקבצים
git add .

# עשה commit
git commit -m "Hebrew Prooffolio - Ready for Vercel"

# דחוף ל-GitHub
git push origin main
```

### שלב 2: התחברות ל-Vercel

1. עבור ל-[vercel.com](https://vercel.com)
2. התחבר עם חשבון GitHub שלך
3. לחץ על "New Project"
4. בחר את הריפוזיטורי `prooffolio-hebrew`

### שלב 3: הגדרות הפרויקט

Vercel אמור לזהות את ההגדרות באופן אוטומטי, אך וודא:

**Build Settings:**
- Framework: `Vite`
- Build Command: `pnpm build`
- Output Directory: `dist/public`
- Install Command: `pnpm install`

**Environment Variables:**
- אין צורך בהגדרות סביבה למטרות זה

### שלב 4: Deploy

לחץ על "Deploy" וחכה שהפרויקט יבנה ויופעל.

## ✅ בדיקה לאחר ההעלאה

1. בדוק שהאתר נטען בכתובת ה-Vercel (לדוגמה: `prooffolio-hebrew.vercel.app`)
2. וודא שהעברית מופיעה בצורה נכונה
3. בדוק את האנימציות
4. וודא שהתמונות מופיעות

## 🔄 עדכונים עתידיים

כל פעם שתדחוף קוד ל-GitHub, Vercel יבנה ויפרוס באופן אוטומטי.

```bash
# עשה שינויים
# ...

# דחוף ל-GitHub
git add .
git commit -m "Update: [תיאור השינוי]"
git push origin main

# Vercel יפרוס באופן אוטומטי!
```

## 🆘 פתרון בעיות

### הבנייה נכשלה
- בדוק את `pnpm build` בקומפיוטר שלך
- וודא שכל התלויות מותקנות

### האתר לא נטען
- בדוק את הקונסול (F12) לשגיאות
- וודא שה-`dist/public` קיים

### התמונות לא מופיעות
- וודא שה-URLs של התמונות נכונים
- בדוק את החיבור לאינטרנט

## 📝 הערות חשובות

- הפרויקט הוא **static site** - אין שרת backend
- כל הקבצים בנויים מראש ב-`dist/public`
- Vercel משרת את הקבצים הסטטיים בצורה מהירה וביעילות

---

**בהצלחה! 🎉**
