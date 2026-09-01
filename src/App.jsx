import React from 'react';

export default function Portfolio() {
  return (
    
  
    <div>
      <style>{`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    min-height: 100vh !important;
    overflow-x: hidden;
  }
`}</style>

      <style>{`
        html, body { overflow-x: hidden; width: 100%; margin: 0; }
        @media (max-width: 768px) {
          div[style*="grid"] { grid-template-columns: 1fr !important; }
          div[style*="flex"] { flex-wrap: wrap !important; }
          h1 { font-size: 32px !important; }
          h2 { font-size: 20px !important; }
          img { max-width: 100% !important; height: auto !important; }
        }
      `}</style>

      
  <div style={{
  width: '100%',
  minHeight: '100vh',
      backgroundImage: 'url(/bg.jpg)', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  margin: 0,
  padding: 0
}}>



      {/* 1. الشريط العلوي (Navbar) */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '12px 30px', 
        backgroundColor: 'rgba(255, 255, 255, 0.55)', 
        backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)', 
        borderBottom: '1px solid rgba(251, 207, 232, 0.4)',
        position: 'fixed',
        top: 0,
        
  left: 0,                           /* 👈 أضيفي هذا السطر لتثبيته من اليسار */
  width: '100vw',                    /* 👈 أضيفي هذا السطر ليمتد بعرض الشاشة كاملاً */
  boxSizing: 'border-box',
        zIndex: 10000
      }}>
        
        {/* اليمين: اسمي والمسمسى الوظيفي */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#db2777', fontWeight: '800', fontSize: '22px', direction: 'ltr', display: 'inline-block' }}>
            &lt;/&gt;
          </span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '800', fontSize: '18px', color: '#4a2e35', lineHeight: '1.2' }}>
              ضياء ملائكة
            </span>
            <span style={{ fontWeight: '600', fontSize: '12px', color: '#000000', marginTop: '2px' }}>
              مطورة واجهات أمامية
            </span>
          </div>
        </div>

        {/* الوسط: أزرار التنقل */}
        <div style={{ display: 'flex', gap: '18px', fontSize: '13px', fontWeight: '700' }}>
          <a href="#hero" style={{ color: '#db2777', textDecoration: 'none' }}>الرئيسية</a>
          <a href="#about" style={{ color: '#4a2e35', textDecoration: 'none' }}>عني</a>
          <a href="#skills" style={{ color: '#4a2e35', textDecoration: 'none' }}>المهارات</a>
          <a href="#projects" style={{ color: '#4a2e35', textDecoration: 'none' }}>المشاريع</a>
          <a href="#experience" style={{ color: '#4a2e35', textDecoration: 'none' }}>الخبرات</a>
          <a href="#certificates" style={{ color: '#4a2e35', textDecoration: 'none' }}>الشهادات</a>
          <a href="#blog" style={{ color: '#4a2e35', textDecoration: 'none' }}>المدونة</a>
          <a href="#contact" style={{ color: '#4a2e35', textDecoration: 'none' }}>تواصل معي</a>
        </div>

        {/* اليسار: زر تحميل السيرة الذاتية */}
        <div>
          <a 
            href="/cv.pdf" 
            download 
            style={{ 
              backgroundColor: '#db2777', 
              color: '#ffffff', 
              padding: '8px 18px', 
              borderRadius: '20px', 
              textDecoration: 'none', 
              fontSize: '13px', 
              fontWeight: 'bold', 
              display: 'inline-block',
              boxShadow: '0 4px 12px rgba(219, 39, 119, 0.25)' 
            }}
          >
            تحميل السيرة الذاتية
          </a>
        </div>
      </nav>

      {/* 2. القسم العلوي (Hero Section) */}
      <section id="hero" style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        paddingTop: '110px', 
        paddingBottom: '70px', 
        paddingRight: '20px',
        paddingLeft: '20px',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '30px' 
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <p style={{ color: '#8b5e6b', fontSize: '18px', fontWeight: '600', marginBottom: '5px' }}>مرحباً، أنا</p>
        
          <h1 style={{ color: '#9d5c6d', fontSize: '46px', margin: '0 0 10px 0', fontWeight: '800' }}>ضياء ملائكة</h1>
          <h2 style={{ fontSize: '22px', color: '#4a2e35', marginBottom: '15px', fontWeight: '700' }}>مطورة واجهات أمامية & مصممة UI/UX</h2>
          <p style={{ color: '#664d54', lineHeight: '1.7', fontSize: '15px', marginBottom: '25px', maxWidth: '450px' }}>
            أصمم وأطور واجهات ويب حديثة، متجاوبة وسريعة الاستجابة تمنح المستخدم تجربة سلسة ومميزة.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#projects" style={{ backgroundColor: '#db2777', color: '#fff', padding: '12px 28px', borderRadius: '25px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(219,39,119,0.25)' }}>
              استعراض مشاريعي
            </a>
            <a href="#contact" style={{ border: '1px solid #fbcfe8', color: '#db2777', padding: '12px 28px', borderRadius: '25px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', backgroundColor: 'rgba(255,255,255,0.7)' }}>
              تواصل معي
            </a>
          </div>

          {/* أيقونات التواصل الاجتماعي */}
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginTop: '20px' }}>
            
            {/* GitHub */}
            <a href="https://github.com/DeaaMalaika" target="_blank" rel="noreferrer" title="GitHub" style={{
              backgroundColor: '#fff', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', color: '#333'
            }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/deaa-malaika-1ba351430/" target="_blank" rel="noreferrer" title="LinkedIn" style={{
              backgroundColor: '#fff', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', color: '#0a66c2'
            }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Netlify */}
            <a href="https://app.netlify.com/teams/deaamalaika2020/projects?visibility=public" target="_blank" rel="noreferrer" title="Netlify" style={{
              backgroundColor: '#fff', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', color: '#00c7b7'
            }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.15 16.03l-2.82-2.82 5.09-5.09 2.82 2.82-5.09 5.09zm11.7-8.06l-5.09 5.09 2.82 2.82 5.09-5.09-2.82-2.82zM12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/deaa.malaika?igsi=cXZwcmJjZXZ0Y2Rz" target="_blank" rel="noreferrer" title="Instagram" style={{
              backgroundColor: '#fff', padding: '10px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', color: '#db2777'
            }}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

          </div>
        </div>

{/* كرت الصورة الشخصية الدائري */}
{/* كرت الصورة الشخصية الدائري - ظهور كامل للصورة بدون قص */}
<div style={{ 
  width: '250px', 
  height: '250px', 
  borderRadius: '50%', 
  backgroundColor: '#ffffff', /* خلفية بيضاء نقية خلف الصورة */
  border: '5px solid #ffffff', 
  boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
  overflow: 'hidden', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box'
}}>
  <img 
    src="/photo.jpg" 
    alt="صورة ضياء الشخصية" 
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'contain', /* تضمن ظهور كامل الصورة داخل الدائرة بدون أي قص */
      display: 'block'
    }} 
  />
</div>
      </section>
    
      {/* 3. محتوى الأقسام السفلي */}
      <section id="content" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* قسم نبذة عني */}
        <div id="about" style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.85)', 
          backdropFilter: 'blur(8px)', 
          padding: '30px 40px', 
          borderRadius: '24px', 
          border: '1px solid #fce7f3', 
          marginBottom: '25px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.02)' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection:"row-reverse",
            gap: '30px', 
            alignItems: 'center',
            justifyContent: 'space-between' 
          }}>
            
            {/* الطرف الأيمن: النص والشعار */}
            <div style={{ flex: '1 1 450px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                <div style={{ 
                  backgroundColor: '#fce7f3', 
                  borderRadius: '50%', 
                  padding: '10px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <svg width="22" height="22" fill="#db2777" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 style={{ color: '#9d5c6d', fontSize: '22px', margin: 0, fontWeight: '800' }}>نبذة عني</h3>
              </div>

              <p style={{ color: '#554147', fontSize: '15px', lineHeight: '1.9', margin: 0, fontWeight: '600' }}>
                أنا مطورة واجهات أمامية شغوفة بتحويل الأفكار وتصاميم Figma إلى واجهات ويب جميلة وجذابة وسهلة الاستخدام، أحب بناء مواقع سريعة ومتجاوبة وتقدم تجربة للمستخدم استثنائية، كما أنني عضو تنفيذي فعال في شركة Returnprogrammer.
              </p>
            </div>

<div style={{ 
  flex: '1 1 340px', 
  display: 'flex', 
  justifyContent: 'space-between',
  flexDirection: 'row-reverse',
  gap: '30px',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  padding: '24px',
  borderRadius: '16px',
  border: '1px solid #fbcfe8'
}}>
  
  {/* العمود الأيمن (الاسم، الموقع، البريد الإلكتروني) */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', flex: 1 }}>
    
    {/* الاسم */}
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <svg width="18" height="18" fill="#db2777" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      <div>
        <div style={{ color: '#8b5e6b', fontSize: '12px', fontWeight: 'bold' }}>الاسم</div>
        <div style={{ color: '#4a2e35', fontSize: '14px', fontWeight: 'bold', marginTop: '2px' }}>ضياء ملائكة</div>
      </div>
    </div>

    {/* الموقع */}
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <svg width="18" height="18" fill="#db2777" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
      <div>
        <div style={{ color: '#8b5e6b', fontSize: '12px', fontWeight: 'bold' }}>الموقع</div>
        <div style={{ color: '#4a2e35', fontSize: '14px', fontWeight: 'bold', marginTop: '2px' }}>سوريا ,حماه </div>
      </div>
    </div>

    {/* البريد الإلكتروني */}
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <svg width="18" height="18" fill="#db2777" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
      <div>
        <div style={{ color: '#8b5e6b', fontSize: '12px', fontWeight: 'bold' }}>البريد الإلكتروني</div>
        <div style={{ color: '#4a2e35', fontSize: '13px', fontWeight: 'bold', marginTop: '2px', wordBreak: 'break-all' }}>deaamalaika2020@gmail.com</div>
      </div>
    </div>

  </div>


  {/* العمود الأيسر (التوفر، الخبرة، اللغات) */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', flex: 1 }}>
    
    {/* التوفر */}
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <svg width="18" height="18" fill="#db2777" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
      <div>
        <div style={{ color: '#8b5e6b', fontSize: '12px', fontWeight: 'bold' }}>التوفر</div>
        <div style={{ color: '#4a2e35', fontSize: '14px', fontWeight: 'bold', marginTop: '2px' }}>  متاحة للعمل في اي وقت</div>
      </div>
    </div>

    {/* الخبرة */}
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <svg width="18" height="18" fill="#db2777" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
      <div>
        <div style={{ color: '#8b5e6b', fontSize: '12px', fontWeight: 'bold' }}>الخبرة</div>
        <div style={{ color: '#4a2e35', fontSize: '14px', fontWeight: 'bold', marginTop: '2px' }}>+2 سنوات</div>
      </div>
    </div>

    {/* اللغات */}
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <svg width="18" height="18" fill="#db2777" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.91-4.33-3.56zm2.95-8H5.08c.96-1.65 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
      <div>
        <div style={{ color: '#8b5e6b', fontSize: '12px', fontWeight: 'bold' }}>اللغات</div>
        <div style={{ color: '#4a2e35', fontSize: '13px', fontWeight: 'bold', marginTop: '2px' }}>العربية، الإنجليزية</div>
      </div>
    </div>

  </div>
</div>
</div>
        </div>
{/* قسم المهارات (كارد مستقل كاملاً) */}
<div id="skills" style={{ 
  backgroundColor: '#ffffff', 
  padding: '30px 25px', 
  borderRadius: '20px', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  margin: '25px 0'
}}>
  {/* عنوان القسم */}
  <h2 style={{ 
    color: '#333333', 
    fontSize: '20px', 
    fontWeight: 'bold', 
    marginBottom: '25px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textAlign: 'right'
  }}>
    <span style={{ color: '#ec4899', fontSize: '24px' }}>•</span> المهارات
  </h2>

  {/* شبكة البطاقات متراصة بجانب بعضها */}
  <div style={{ 
    display: 'flex', 
    flexWrap: 'wrap', 
    gap: '15px', 
    justifyContent: 'flex-start',
    direction: 'rtl'
  }}>

    {/* HTML5 */}
    <div style={{
      flex: '1 1 100px',
      maxWidth: '110px',
      backgroundColor: '#ffffff',
      padding: '20px 10px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #f3f4f6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <svg width="40" height="40" viewBox="0 0 512 512">
        <path fill="#E44D26" d="M71 460L30 0h452l-41 460-185 52z"/>
        <path fill="#F16529" d="M256 472l149-41 35-391H256v432z"/>
        <path fill="#EBEBEB" d="M256 208H164l-4-48h96V112H108l12 144h136zm0 148l-63-17-4-47h-48l8 93 107 29z"/>
        <path fill="#FFFFFF" d="M256 208v48h88l-8 93-80 22v49l107-29 14-156zM256 112v48h140l4-48z"/>
      </svg>
      <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333333', marginTop: '12px' }}>HTML</span>
    </div>

    {/* CSS3 */}
    <div style={{
      flex: '1 1 100px',
      maxWidth: '110px',
      backgroundColor: '#ffffff',
      padding: '20px 10px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #f3f4f6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <svg width="40" height="40" viewBox="0 0 512 512">
        <path fill="#264DE4" d="M71 460L30 0h452l-41 460-185 52z"/>
        <path fill="#2965F1" d="M256 472l149-41 35-391H256v432z"/>
        <path fill="#EBEBEB" d="M256 208H164l-4-48h96V112H108l12 144h136zm0 148l-63-17-4-47h-48l8 93 107 29z"/>
        <path fill="#FFFFFF" d="M256 208v48h88l-8 93-80 22v49l107-29 14-156zM256 112v48h140l4-48z"/>
      </svg>
      <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333333', marginTop: '12px' }}>CSS</span>
    </div>

{/* JavaScript */}
<div style={{
  flex: '1 1 100px',
  maxWidth: '110px',
  backgroundColor: '#ffffff',
  padding: '20px 10px',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #f3f4f6',
  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
}}>
  <svg width="40" height="40" viewBox="0 0 24 24">
    <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
    <path fill="#000000" d="M11.23 18.23c.36.21.78.36 1.25.36.68 0 1.11-.33 1.11-.8 0-.54-.42-.74-1.21-1.07l-.42-.18c-1.22-.51-2.03-1.15-2.03-2.5 0-1.25.97-2.19 2.5-2.19.98 0 1.7.27 2.22.61l-.64 1.1c-.38-.25-.86-.42-1.46-.42-.64 0-1.01.31-1.01.71 0 .47.38.66 1.14.98l.42.18c1.37.58 2.12 1.23 2.12 2.55 0 1.45-1.14 2.33-2.73 2.33-1.12 0-2.01-.36-2.51-.72l.74-1.14zm-4.71.05c.34.2.7.32 1.13.32.55 0 .9-.26.9-1.02V12h1.56v5.6c0 1.57-.86 2.27-2.26 2.27-.87 0-1.52-.27-1.92-.57l.59-1.02z"/>
  </svg>
  <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333333', marginTop: '12px' }}>JavaScript</span>
</div>

    {/* React */}
    <div style={{
      flex: '1 1 100px',
      maxWidth: '110px',
      backgroundColor: '#ffffff',
      padding: '20px 10px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #f3f4f6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <svg width="40" height="40" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
      <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333333', marginTop: '12px' }}>React</span>
    </div>


    {/* Git & GitHub */}
    <div style={{
      flex: '1 1 100px',
      maxWidth: '110px',
      backgroundColor: '#ffffff',
      padding: '20px 10px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #f3f4f6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="#24292e">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
      <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#333333', marginTop: '12px' }}>Git & GitHub</span>
    </div>

    {/* Figma */}
    <div style={{
      flex: '1 1 100px',
      maxWidth: '110px',
      backgroundColor: '#ffffff',
      padding: '20px 10px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #f3f4f6',
      boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
    }}>
      <svg width="40" height="40" viewBox="0 0 38 57">
        <path fill="#0ACF83" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
        <path fill="#A259FF" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
        <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z"/>
        <path fill="#FF7262" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z"/>
        <path fill="#1ABCFE" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z"/>
      </svg>
      <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#333333', marginTop: '12px' }}>Figma</span>
    </div>

  </div>
</div>

      </section>
{/* قسم المشاريع - متناسق بالحجم مع بقية الكروت */}
<div id="projects" style={{ 
  width: '100%', 
  maxWidth: '1000px', 
  margin: '25px auto', 
  backgroundColor: '#ffffff', 
  padding: '30px 25px', 
  borderRadius: '20px', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  boxSizing: 'border-box',
  direction: 'rtl'
}}>
  {/* الهيدر */}
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
    <h2 style={{ color: '#333333', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
      <span style={{ color: '#ec4899', fontSize: '24px' }}>•</span> المشاريع
    </h2>
    <a href="#" style={{ color: '#ec4899', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>عرض جميع المشاريع ←</a>
  </div>

  {/* شبكة المشاريع المتناسقة */}
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
    gap: '16px' 
  }}>
    
    {/* مشروع 1 */}
    <div style={{ backgroundColor: '#f9fafb', borderRadius: '16px', padding: '12px', border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ width: '100%', height: '130px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80" alt="موقعي الشخصي" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', textAlign: 'center', marginTop: '10px', marginBottom: '4px' }}>موقعي الشخصي</h3>
        <p style={{ fontSize: '11px', color: '#777', textAlign: 'center', margin: '0 0 10px 0', lineHeight: '1.4' }}>موقع بورتفوليو شخصي يعرض أعمالي ومهاراتي.</p>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <span style={{ backgroundColor: '#fdf2f8', color: '#ec4899', fontSize: '10px', padding: '2px 8px', borderRadius: '8px' }}>React</span>
          <span style={{ backgroundColor: '#fdf2f8', color: '#ec4899', fontSize: '10px', padding: '2px 8px', borderRadius: '8px' }}>Tailwind CSS</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px dashed #e5e7eb' }}>
          <a href="#" style={{ color: '#ec4899', fontSize: '11px', textDecoration: 'none', fontWeight: 'bold' }}>عرض مباشر ↗</a>
          <a href="#" style={{ color: '#4b5563', fontSize: '11px', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
        </div>
      </div>
    </div>

    {/* مشروع 2 */}
    <div style={{ backgroundColor: '#f9fafb', borderRadius: '16px', padding: '12px', border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ width: '100%', height: '130px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <img src="https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=500&q=80" alt="تطبيق الطقس" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', textAlign: 'center', marginTop: '10px', marginBottom: '4px' }}>تطبيق الطقس</h3>
        <p style={{ fontSize: '11px', color: '#777', textAlign: 'center', margin: '0 0 10px 0', lineHeight: '1.4' }}>تطبيق يعرض حالة الطقس والتنبؤات مباشرة.</p>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <span style={{ backgroundColor: '#fdf2f8', color: '#ec4899', fontSize: '10px', padding: '2px 8px', borderRadius: '8px' }}>React</span>
          <span style={{ backgroundColor: '#fdf2f8', color: '#ec4899', fontSize: '10px', padding: '2px 8px', borderRadius: '8px' }}>API</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px dashed #e5e7eb' }}>
          <a href="#" style={{ color: '#ec4899', fontSize: '11px', textDecoration: 'none', fontWeight: 'bold' }}>عرض مباشر ↗</a>
          <a href="#" style={{ color: '#4b5563', fontSize: '11px', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
        </div>
      </div>
    </div>

    {/* مشروع 3 */}
    <div style={{ backgroundColor: '#f9fafb', borderRadius: '16px', padding: '12px', border: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ width: '100%', height: '130px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          <img src="https://images.unsplash.com/photo-1556742049-0a67568600d8?auto=format&fit=crop&w=500&q=80" alt="متجر إلكتروني" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', textAlign: 'center', marginTop: '10px', marginBottom: '4px' }}>متجر إلكتروني</h3>
        <p style={{ fontSize: '11px', color: '#777', textAlign: 'center', margin: '0 0 10px 0', lineHeight: '1.4' }}>متجر متكامل مع سلة مشتريات واختيارات متعددة.</p>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', flexWrap: 'wrap', marginBottom: '10px' }}>
          <span style={{ backgroundColor: '#fdf2f8', color: '#ec4899', fontSize: '10px', padding: '2px 8px', borderRadius: '8px' }}>React</span>
          <span style={{ backgroundColor: '#fdf2f8', color: '#ec4899', fontSize: '10px', padding: '2px 8px', borderRadius: '8px' }}>Redux</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px dashed #e5e7eb' }}>
          <a href="#" style={{ color: '#ec4899', fontSize: '11px', textDecoration: 'none', fontWeight: 'bold' }}>عرض مباشر ↗</a>
          <a href="#" style={{ color: '#4b5563', fontSize: '11px', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
        </div>
      </div>
    </div>

  </div>
</div>
{/* حاوية تجمع الخبرات و ماذا أقدم جنباً إلى جنب */}
<div style={{ 
  width: '100%', 
  maxWidth: '1000px', 
  margin: '25px auto', 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
  gap: '20px', 
  direction: 'rtl',
  boxSizing: 'border-box'
}}>

  {/* الكرت الأول: الخبرات */}
  <div id='skills' style={{ 
    backgroundColor: '#ffffff', 
    padding: '30px 25px', 
    borderRadius: '20px', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <h2 style={{ color: '#333333', fontSize: '20px', fontWeight: 'bold', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
      <span style={{ color: '#ec4899', fontSize: '24px' }}>•</span> الخبرات
    </h2>

    <div style={{ position: 'relative', marginTop: '20px', paddingRight: '15px' }}>
      
      {/* الخط العمودي الناعم خلف النقاط */}
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        bottom: '30px', 
        right: '20px', 
        width: '2px', 
        backgroundColor: '#fbcfe8',
        zIndex: 1 
      }}></div>

      {/* عنصر خبرة 1 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            backgroundColor: '#ffffff', 
            border: '3px solid #ec4899', 
            marginTop: '4px', 
            flexShrink: 0 
          }}></div>
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>مطورة واجهات أمامية (مستقلة)</h3>
            <p style={{ fontSize: '11px', color: '#777', margin: 0, lineHeight: '1.5' }}>أعمل مع عملاء من مختلف أنحاء العالم وتطوير مواقع ويب حديثة.</p>
          </div>
        </div>
        <span style={{ fontSize: '11px', color: '#ec4899', fontWeight: 'bold', whiteSpace: 'nowrap', marginRight: '10px' }}>2025 - الآن</span>
      </div>

      {/* عنصر خبرة 2 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            backgroundColor: '#ffffff', 
            border: '3px solid #ec4899', 
            marginTop: '4px', 
            flexShrink: 0 
          }}></div>
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>مطورة واجهات أمامية (متدربة)</h3>
            <p style={{ fontSize: '11px', color: '#777', margin: 0, lineHeight: '1.5' }}>تطوير واجهات لمواقع وتطبيقات داخلية بالتعاون مع فريق البرمجي Returnprogrammer .</p>
          </div>
        </div>
        <span style={{ fontSize: '11px', color: '#ec4899', fontWeight: 'bold', whiteSpace: 'nowrap', marginRight: '10px' }}>2026 - الان</span>
      </div>

      {/* عنصر خبرة 3 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
          <div style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            backgroundColor: '#ffffff', 
            border: '3px solid #ec4899', 
            marginTop: '4px', 
            flexShrink: 0 
          }}></div>
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>طالبة في هندسة المعلوماتية  </h3>
            <p style={{ fontSize: '11px', color: '#777', margin: 0, lineHeight: '1.5' }}>أدرس هندسة المعلوماتية(تقانة المعلومات ) مع التركيز على تطوير الويب وتجربة المستخدم.</p>
          </div>
        </div>
        <span style={{ fontSize: '11px', color: '#ec4899', fontWeight: 'bold', whiteSpace: 'nowrap', marginRight: '10px' }}>2024 - 2025</span>
      </div>
    </div>
  </div>

  {/* الكرت الثاني: ماذا أقدم؟ */}
  <div style={{ 
    backgroundColor: '#ffffff', 
    padding: '30px 25px', 
    borderRadius: '20px', 
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <h2 style={{ color: '#333333', fontSize: '20px', fontWeight: 'bold', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
      <span style={{ color: '#ec4899', fontSize: '24px' }}>•</span> ماذا أقدم؟
    </h2>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
      
      {/* خدمة 1 */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', padding: '12px' }}>
        <div style={{ 
          width: '36px', 
          height: '36px', 
          borderRadius: '10px', 
          backgroundColor: '#fdf2f8', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '10px' 
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>تصميم واجهات متجوبة</h3>
        <p style={{ fontSize: '10px', color: '#888', margin: 0, lineHeight: '1.4' }}>تصميم مواقع تعمل بكفاءة على جميع الأجهزة والشاشات.</p>
      </div>

      {/* خدمة 2 */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', padding: '12px' }}>
        <div style={{ 
          width: '36px', 
          height: '36px', 
          borderRadius: '10px', 
          backgroundColor: '#fdf2f8', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '10px' 
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
        </div>
        <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>تطبيقات باستخدام React</h3>
        <p style={{ fontSize: '10px', color: '#888', margin: 0, lineHeight: '1.4' }}>بناء تطبيقات ويب حديثة باستخدام React و Next.js.</p>
      </div>

      {/* خدمة 3 */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', padding: '12px' }}>
        <div style={{ 
          width: '36px', 
          height: '36px', 
          borderRadius: '10px', 
          backgroundColor: '#fdf2f8', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '10px' 
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.58 7.58"/><circle cx="11" cy="11" r="2"/></svg>
        </div>
        <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>تحويل التصميم إلى كود</h3>
        <p style={{ fontSize: '10px', color: '#888', margin: 0, lineHeight: '1.4' }}>تحويل تصاميم Figma إلى موقع ويب احترافي ودقيق.</p>
      </div>

      {/* خدمة 4 */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', padding: '12px' }}>
        <div style={{ 
          width: '36px', 
          height: '36px', 
          borderRadius: '10px', 
          backgroundColor: '#fdf2f8', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: '10px' 
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <h3 style={{ fontSize: '12px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>تحسين الأداء</h3>
        <p style={{ fontSize: '10px', color: '#888', margin: 0, lineHeight: '1.4' }}>تحسين سرعة الموقع وتجربة المستخدم لمحركات البحث.</p>
      </div>

    </div>
  </div>

</div>
{/* قسم الشهادات - مطابق للصورة */}
<div id="certificates" style={{ 
  width: '100%', 
  maxWidth: '1000px', 
  margin: '25px auto', 
  backgroundColor: '#ffffff', 
  padding: '30px 25px', 
  borderRadius: '20px', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  boxSizing: 'border-box',
  direction: 'rtl'
}}>
  {/* الهيدر */}
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
    <h2 style={{ color: '#333333', fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
      <span style={{ color: '#ec4899', fontSize: '24px' }}>•</span> الشهادات
    </h2>
    <a href="#" style={{ color: '#ec4899', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold' }}>عرض جميع الشهادات ←</a>
  </div>

  {/* شبكة كروت الشهادات */}
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
    gap: '16px' 
  }}>
    
    {/* شهادة 1 */}
    <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f3f4f6', overflow: 'hidden', padding: '10px' }}>
      <div style={{ width: '100%', height: '110px', backgroundColor: '#fdf2f8', borderRadius: '12px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=400&q=80" alt="Responsive Web Design" style={{ width: '90%', height: '80%', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', backgroundColor: '#ec4899', color: '#fff', width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>📜</div>
      </div>
      <div style={{ marginTop: '10px', textAlign: 'right' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>Responsive Web Design</h3>
        <p style={{ fontSize: '11px', color: '#ec4899', margin: '0 0 4px 0', fontWeight: '500' }}>freeCodeCamp</p>
        <span style={{ fontSize: '10px', color: '#9ca3af' }}>يناير 2024</span>
      </div>
    </div>

    {/* شهادة 2 */}
    <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f3f4f6', overflow: 'hidden', padding: '10px' }}>
      <div style={{ width: '100%', height: '110px', backgroundColor: '#fdf2f8', borderRadius: '12px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80" alt="JavaScript Algorithms" style={{ width: '90%', height: '80%', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', backgroundColor: '#ec4899', color: '#fff', width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>📜</div>
      </div>
      <div style={{ marginTop: '10px', textAlign: 'right' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>JavaScript Algorithms</h3>
        <p style={{ fontSize: '11px', color: '#ec4899', margin: '0 0 4px 0', fontWeight: '500' }}>freeCodeCamp</p>
        <span style={{ fontSize: '10px', color: '#9ca3af' }}>ديسمبر 2023</span>
      </div>
    </div>

    {/* شهادة 3 */}
    <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f3f4f6', overflow: 'hidden', padding: '10px' }}>
      <div style={{ width: '100%', height: '110px', backgroundColor: '#fdf2f8', borderRadius: '12px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" alt="React - The Complete Guide" style={{ width: '90%', height: '80%', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', backgroundColor: '#ec4899', color: '#fff', width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>📜</div>
      </div>
      <div style={{ marginTop: '10px', textAlign: 'right' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>React - The Complete Guide</h3>
        <p style={{ fontSize: '11px', color: '#ec4899', margin: '0 0 4px 0', fontWeight: '500' }}>Udemy</p>
        <span style={{ fontSize: '10px', color: '#9ca3af' }}>نوفمبر 2023</span>
      </div>
    </div>

    {/* شهادة 4 */}
    <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #f3f4f6', overflow: 'hidden', padding: '10px' }}>
      <div style={{ width: '100%', height: '110px', backgroundColor: '#fdf2f8', borderRadius: '12px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80" alt="UI/UX Design Fundamentals" style={{ width: '90%', height: '80%', objectFit: 'cover', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
        <div style={{ position: 'absolute', bottom: '8px', left: '8px', backgroundColor: '#ec4899', color: '#fff', width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>📜</div>
      </div>
      <div style={{ marginTop: '10px', textAlign: 'right' }}>
        <h3 style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', margin: '0 0 4px 0' }}>UI/UX Design Fundamentals</h3>
        <p style={{ fontSize: '11px', color: '#ec4899', margin: '0 0 4px 0', fontWeight: '500' }}>Coursera</p>
        <span style={{ fontSize: '10px', color: '#9ca3af' }}>أكتوبر 2023</span>
      </div>
    </div>

  </div>
</div>
{/* قسم التواصل المعدل بالكامل */}
<div id='contact' style={{ 
  width: '100%', 
  maxWidth: '1000px', 
  margin: '25px auto', 
  backgroundColor: '#ffffff', 
  padding: '30px 25px', 
  borderRadius: '20px', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  boxSizing: 'border-box',
  direction: 'rtl'
}}>
  
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: '1.1fr 1.8fr 1.1fr', 
    gap: '20px', 
    alignItems: 'stretch' 
  }}>
    
    {/* 1. الجانب الأيمن: كرت معلومات التواصل فقط (بدون أي نصوص فوقه) */}
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#fdf2f8', borderRadius: '16px', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: '14px', border: '1px solid #fbcfe8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '16px' }}>✉️</span>
          <div>
            <span style={{ fontSize: '10px', color: '#888', display: 'block' }}>البريد الإلكتروني</span>
            <a href="mailto:lina.dev@example.com" style={{ fontSize: '11px', color: '#333', fontWeight: 'bold', textDecoration: 'none' }}>deaamalaika2020@gmail.com</a>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '16px' }}>📞</span>
          <div>
            <span style={{ fontSize: '10px', color: '#888', display: 'block' }}>الهاتف</span>
            <span style={{ fontSize: '11px', color: '#333', fontWeight: 'bold', direction: 'ltr', display: 'inline-block' }}>+963 962 623 678</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '16px' }}>📍</span>
          <div>
            <span style={{ fontSize: '10px', color: '#888', display: 'block' }}>الموقع</span>
            <span style={{ fontSize: '11px', color: '#333', fontWeight: 'bold' }}>,حماه سوريا</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '16px' }}>🕒</span>
          <div>
            <span style={{ fontSize: '10px', color: '#888', display: 'block' }}>التوفر</span>
            <span style={{ fontSize: '11px', color: '#333', fontWeight: 'bold' }}>متاحة للعمل</span>
          </div>
        </div>
      </div>
    </div>

    {/* 2. المنتصف: نموذج التواصل موضوع داخل كرت مستقل */}
    <div style={{ 
      backgroundColor: '#ffffff', 
      borderRadius: '16px', 
      padding: '20px', 
      border: '1px solid #f3f4f6', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
      display: 'flex',
      flexDirection: 'column',
      justify: 'center'
    }}>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="الاسم الكامل" 
            style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f3f4f6', backgroundColor: '#f9fafb', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} 
          />
          <input 
            type="email" 
            placeholder="البريد الإلكتروني" 
            style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f3f4f6', backgroundColor: '#f9fafb', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} 
          />
        </div>

        <input 
          type="text" 
          placeholder="الموضوع" 
          style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f3f4f6', backgroundColor: '#f9fafb', fontSize: '12px', outline: 'none', boxSizing: 'border-box' }} 
        />

        <textarea 
          placeholder="الرسالة" 
          rows="3" 
          style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #f3f4f6', backgroundColor: '#f9fafb', fontSize: '12px', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
        ></textarea>

        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            backgroundColor: '#ec4899', 
            color: '#ffffff', 
            padding: '10px', 
            borderRadius: '10px', 
            border: 'none', 
            fontSize: '12px', 
            fontWeight: 'bold', 
            cursor: 'pointer'
          }}
        >
          إرسال الرسالة 🚀
        </button>
      </form>
    </div>

{/* 3. الجانب الأيسر: الصورة تظهر كاملة بدون قص أي جزء من جوانبها */}
<div style={{ 
  width: '100%', 
  height: '100%', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  backgroundColor: '#fdf2f8', /* خلفية وردية هادئة تحتفظ بالجمالية إذا كانت أبعاد الصورة مختلفة */
  borderRadius: '16px',
  overflow: 'hidden'
}}>
  <img 
    src="/my-photo.png" 
    alt="تواصل معي" 
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'contain', /* تضمن ظهور كامل أجزاء الصورة العرضية والارتفاع بدون قص */
      display: 'block'
    }} 
  />
</div>

  </div>
</div>
  </div>

</div>
  );
  
}
