// Theme and bilingual interaction layer for the static LoopTech site.
const arToEn = new Map([
  ['الرئيسية', 'Home'], ['المشاريع', 'Projects'], ['مشاريع أثبتت', 'Projects that'], ['نفسها في السوق', 'proved themselves'], ['حلول تطبيقية', 'App solutions'], ['نقدر نبني', 'What we can build'], ['خدماتنا', 'Services'], ['من نحن', 'About us'], ['تواصل معنا', 'Contact'],
  ['حوّل فكرتك إلى منتج حقيقي', 'Turn your idea into a real product'], ['نصمم ونطور منتجات رقمية تجمع بين الأداء العالي وتجربة المستخدم — لعملاء في أسواق متعددة حول العالم.', 'We design and build digital products that combine high performance with thoughtful user experiences for clients around the world.'],
  ['مشروع مُسلَّم', 'Projects delivered'], ['أسواق دولية', 'International markets'], ['سنوات في الصناعة', 'Years in the industry'], ['معدل رضا العملاء', 'Client satisfaction'], ['استعرض أعمالنا', 'View our work'], ['ابدأ مشروعك', 'Start your project'],
  ['أعمالنا', 'Our work'], ['منتجات رقمية سلّمناها لعملاء في أسواق متعددة — كل مشروع يعكس منهجية عمل مبنية على الجودة والاستدامة.', 'Digital products delivered for clients across multiple markets — each one reflects a process built around quality and long-term value.'],
  ['أكاديمية رياضية', 'Sports academy'], ['السعودية', 'Saudi Arabia'], ['المحترف — الأكاديمية الرياضية', 'Al Muhtarif — Sports Academy'], ['منصة ويب لأكاديمية رياضية سعودية مبنية بـ React — تعرض البرامج التدريبية وتتيح التسجيل والتواصل بشكل سهل وعصري.', 'A React-based website for a Saudi sports academy, showcasing training programs and making registration and contact simple.'],
  ['صيانة تكييفات', 'AC maintenance'], ['Finioon — خدمات التكييف', 'Finioon — AC services'], ['موقع متكامل لشركة صيانة تكييفات سعودية مبني بـ Laravel — يتيح حجز الخدمات وعرض العروض بشكل منظم واحترافي.', 'A complete Laravel website for a Saudi AC maintenance company, with service booking and offers presented clearly.'],
  ['تجارة دولية', 'International trade'], ['الشرق الأوسط', 'Middle East'], ['Yiwu Huachi — التجارة الصينية', 'Yiwu Huachi — China trade'], ['موقع عرض لشركة تربط بين الموردين الصينيين والمستوردين في الشرق الأوسط — تصميم يعكس احترافية التجارة الدولية وثقة الطرفين.', 'A showcase website connecting Chinese suppliers with Middle Eastern importers, designed to communicate trust and international professionalism.'],
  ['لاندنج بيج', 'Landing page'], ['MTN KSA — اتصالات سعودية', 'MTN KSA — Saudi telecom'], ['لاندنج بيج احترافية لشركة MTN السعودية للتحكم والمراقبة — بتحكم كامل في المحتوى والتصميم ومُحسَّنة للتحويل.', 'A conversion-focused landing page for MTN Saudi Arabia, with flexible content control and a polished presentation.'],
  ['منصة تعليمية', 'Education platform'], ['مصر', 'Egypt'], ['High Academy — منصة التعلم', 'High Academy — Learning platform'], ['منصة مصرية متكاملة لحجز الدروس الخاصة وشراء الكتب أونلاين — مع داشبورد إدارية كاملة للمعلمين والإدارة، مبنية بـ Laravel.', 'An Egyptian platform for booking private lessons and buying books online, with a complete Laravel dashboard for teachers and administrators.'],
  ['إدارة مهام', 'Task management'], ['Lugano — إدارة المشاريع', 'Lugano — Project management'], ['منصة إدارية بسيطة وذكية لتتبع المهام والمشاريع — واجهة نظيفة وسريعة تساعد الفرق على البقاء منظمين.', 'A simple, smart workspace for tracking tasks and projects, with a clean and fast interface that keeps teams organized.'],
  ['SaaS عربي', 'Arabic SaaS'], ['إدارة مبيعات', 'Sales management'], ['فاتورة إلكتروني — إدارة المبيعات', 'Fatoora Electroni — Sales management'], ['منصة SaaS عربية كاملة لإدارة المبيعات والفرق — فواتير إلكترونية، تقارير، وإدارة العملاء في مكان واحد.', 'A complete Arabic SaaS platform for sales and teams, bringing e-invoices, reports, and customer management together.'],
  ['امتحانات ذكية', 'Smart exams'], ['منصة الامتحانات', 'Exam platform'], ['منصة امتحانات إلكترونية ذكية — تتيح إنشاء الاختبارات وإدارتها وتحليل نتائج الطلاب بشكل تلقائي ومرئي.', 'A smart online exam platform for creating, managing, and visualizing student results.'],
  ['متجر إلكتروني', 'Online store'], ['واجهة المتجر الإلكتروني', 'E-commerce storefront'], ['واجهة أمامية عصرية لمتجر إلكتروني — تجربة تسوق سلسة وسريعة مع عرض احترافي للمنتجات وسلة مشتريات متكاملة.', 'A modern e-commerce frontend with a smooth shopping journey, polished product presentation, and a complete cart experience.'],
  ['تعليم العربية', 'Arabic education'], ['فرنسا', 'France'], ['Ar-Rahman — تعليم اللغة العربية', 'Ar-Rahman — Arabic learning'], ['موقع لمنصة تعليم اللغة العربية للناطقين بالفرنسية — يعرض البرامج والمعلمين ويتيح التسجيل بشكل بسيط ومقنع.', 'A website for an Arabic-learning platform for French speakers, presenting programs and teachers with a clear registration journey.'],
  ['حلول رقمية', 'Digital solutions'], ['متكاملة', 'that scale'], ['تطوير الويب', 'Web development'], ['تطوير مواقع ومنصات ويب عالية الأداء — من المواقع التعريفية إلى أنظمة SaaS المعقدة، بأحدث التقنيات وبنية قابلة للتوسع.', 'High-performance websites and web platforms — from marketing sites to complex, scalable SaaS products.'], ['تطبيقات الموبايل', 'Mobile apps'], ['تطوير تطبيقات iOS وAndroid بتجربة مستخدم متسقة وأداء محسّن، مع دعم كامل لمتطلبات النشر والصيانة.', 'iOS and Android apps with consistent UX, optimized performance, and support for publishing and maintenance.'], ['تحسين محركات البحث', 'Search engine optimization'], ['استراتيجيات SEO تقني وهيكلي مدمجة في بنية المشروع منذ البداية — لضمان ظهور قوي ومستدام في نتائج البحث.', 'Technical and structural SEO integrated from day one to build strong, sustainable search visibility.'], ['التجارة الإلكترونية', 'E-commerce'], ['منصات تجارة إلكترونية متكاملة تشمل إدارة المنتجات وبوابات الدفع وتتبع الطلبات، مصممة لتحقيق أعلى معدلات التحويل.', 'Complete e-commerce platforms with product management, payments, and order tracking designed for conversion.'], ['الأنظمة الإدارية', 'Business systems'], ['لوحات تحكم وأنظمة إدارة مخصصة تتضمن إدارة الصلاحيات والتقارير التحليلية وأتمتة العمليات التشغيلية.', 'Custom dashboards and management systems with permissions, analytics, and operational automation.'], ['UI/UX Design', 'UI/UX Design'], ['تصميم واجهات مستخدم قائمة على مبادئ تجربة المستخدم وأبحاث السلوك — لضمان منتج يُستخدم بكفاءة ويُحقق أهداف العمل.', 'User interfaces grounded in UX principles and behavior research, designed to be useful and business-focused.'],
  ['نهج مختلف', 'A different approach'], ['في بناء المنتجات', 'to building products'], ['شركة تقنية متخصصة في تصميم وتطوير المنتجات الرقمية، تجمع بين الكفاءة التقنية والفهم العميق لمتطلبات السوق.', 'is a technology studio specializing in digital products, combining technical expertise with a deep understanding of market needs.'], ['LoopTech شركة تقنية متخصصة في تصميم وتطوير المنتجات الرقمية، تجمع بين الكفاءة التقنية والفهم العميق لمتطلبات السوق.', 'LoopTech is a technology studio specializing in digital products, combining technical expertise with a deep understanding of market needs.'], ['نعمل مع العملاء كشركاء استراتيجيين، لا كمنفذين فقط. كل مشروع يمر بمنهجية واضحة تبدأ بفهم الأهداف التجارية وتنتهي بتسليم منتج قابل للقياس والتطوير.', 'We work as strategic partners, not just executors. Every project follows a clear process that starts with business goals and ends with a measurable, evolvable product.'], ['خبرتنا تمتد عبر قطاعات متعددة — التعليم، التجارة الإلكترونية، الخدمات، وإدارة الأعمال — في أسواق عربية وأوروبية وآسيوية.', 'Our experience spans education, e-commerce, services, and business operations across Arab, European, and Asian markets.'], ['الفهم والتخطيط', 'Discovery and planning'], ['نبدأ بتحليل متطلبات المشروع وأهدافه التجارية قبل كتابة أي سطر كود.', 'We analyze the project requirements and business goals before writing a single line of code.'], ['التصميم والنمذجة', 'Design and prototyping'], ['نصمم تجربة المستخدم ونبني نماذج أولية للتحقق من الرؤية قبل التنفيذ.', 'We design the user experience and build prototypes to validate the vision before development.'], ['التطوير والاختبار', 'Development and testing'], ['تطوير منضبط وفق معايير الجودة مع اختبار مستمر في كل مرحلة.', 'Disciplined development with quality standards and continuous testing at every stage.'], ['الإطلاق والدعم', 'Launch and support'], ['نطلق المنتج ونواصل الدعم التقني لضمان الاستقرار والتطوير المستمر.', 'We launch the product and continue technical support for stability and ongoing growth.'], ['التقنيات', 'Technology'], ['التقنيات والأدوات', 'Tools and technologies'],
  ['نطاق التنفيذ', 'Delivery scope'], ['أي فكرة رقمية', 'Every digital idea'], ['لها طريق للتنفيذ', 'has a path to launch'], ['مش لازم تكون فكرتك شبه مشروع سابق. بنحوّل احتياجك إلى تجربة واضحة، نظام قابل للتوسع، ومنتج جاهز للنمو.', 'Your idea does not need to look like a previous project. We turn your needs into a clear experience, a scalable system, and a product ready to grow.'], ['من الـ MVP للمنتج الكامل', 'From MVP to full product'], ['نبدأ من المشكلة،', 'We start with the problem,'], ['ونبني الحل المناسب.', 'then build the right solution.'], ['تقدر تبدأ بنموذج Static أو نسخة أولية، وبعدها نطوّرها تدريجيًا إلى منصة كاملة بواجهة مستخدم، لوحة تحكم، صلاحيات، دفع، وتحليلات.', 'Start with a static concept or MVP, then evolve it into a complete platform with UX, dashboards, permissions, payments, and analytics.'], ['تصميم قابل للتوسع من أول يوم', 'Scalable by design from day one'], ['منصات التوظيف والاستقدام', 'Recruitment and staffing platforms'], ['بوابات للباحثين عن عمل والشركات ومكاتب الاستقدام: ملفات شخصية، وظائف، بحث متقدم، تقديم ومتابعة الطلبات.', 'Portals for candidates, companies, and recruitment offices: profiles, jobs, advanced search, applications, and tracking.'], ['التعليم والمنصات التدريبية', 'Education and training platforms'], ['كورسات، امتحانات، حجز دروس، متابعة الطلاب، ومحتوى تعليمي منظم.', 'Courses, exams, lesson booking, student progress, and structured learning content.'], ['تطبيقات الويب وSaaS', 'Web apps and SaaS'], ['منتجات اشتراك، مساحات عمل، صلاحيات، تقارير، وإدارة فرق.', 'Subscription products, workspaces, permissions, reporting, and team management.'], ['الخدمات والحجوزات', 'Services and bookings'], ['حجز مواعيد، طلب خدمات، عروض أسعار، وإدارة العملاء.', 'Appointments, service requests, quotations, and customer management.'], ['مواقع الشركات والمنتجات', 'Corporate and product websites'], ['Landing pages ومواقع تعريفية تساعد البراند على الظهور والتحويل.', 'Landing pages and marketing websites built for visibility and conversion.'], ['الأمثلة هنا توضيحية لنطاق الحلول التي ننفذها. بعض الأعمال السابقة أُنجزت ضمن فرق وشركات أخرى ولا نعرض تفاصيلها حفاظًا على السرية.', 'These examples illustrate the solutions we can deliver. Some previous work was completed within other teams and companies, so we do not disclose details for confidentiality.'],
  ['منظومة تطبيقات', 'App ecosystem'], ['تجربة واحدة، 3 أدوار', 'One experience, three roles'], ['منظومة توصيل متكاملة تربط العميل بالتاجر والسائق في دورة تشغيل واحدة — من إنشاء الطلب إلى التوصيل.', 'A complete delivery ecosystem connecting customers, merchants, and drivers in one operating flow — from order creation to delivery.'], ['منظومة توصيل متكاملة', 'Delivery ecosystem'], ['كل طرف عنده تطبيقه.', 'Each role has its own app.'], ['والمنظومة شغالة كنظام واحد.', 'The ecosystem works as one system.'], ['تصميم وتنفيذ تجربة متعددة الأطراف تشمل الطلب، إدارة المتجر، توزيع الرحلات، وتتبع حالة الطلب.', 'A multi-sided experience covering ordering, merchant operations, dispatch, and order tracking.'], ['عميل', 'Customer'], ['تاجر', 'Merchant'], ['سائق', 'Driver'], ['تطبيق العميل', 'Customer app'], ['ع الطلب بلس', 'Al Talab Plus'], ['تطبيق طلب وتوصيل لأهالي مدينة الحلة، يتيح اكتشاف المطاعم والمتاجر والطلب بسهولة مع عروض وخصومات.', 'A food and delivery app for Al Hillah residents, making it easy to discover restaurants and stores, place orders, and access offers.'], ['مطاعم ومتاجر', 'Restaurants and stores'], ['تتبع الطلب', 'Order tracking'], ['كوبونات', 'Coupons'], ['تطبيق السائق', 'Driver app'], ['ع الطلب — سائق', 'Al Talab — Driver'], ['واجهة تشغيل للسائقين لاستقبال الطلبات، متابعة تفاصيل الرحلة، ومعرفة حالة التوصيل لحظة بلحظة.', 'An operations app for drivers to receive orders, follow trip details, and track delivery status in real time.'], ['استقبال الطلبات', 'Order requests'], ['الموقع والرحلات', 'Location and trips'], ['حالة التوصيل', 'Delivery status'], ['تطبيق التاجر', 'Merchant app'], ['ع الطلب — تاجر', 'Al Talab — Merchant'], ['لوحة تشغيل للمطاعم والمتاجر لإنشاء وإدارة الطلبات، طلب السائقين، ومتابعة سير التوصيل.', 'An operations app for restaurants and stores to create and manage orders, request drivers, and monitor delivery.'], ['إدارة الطلبات', 'Order management'], ['طلب سائق', 'Request a driver'], ['تشغيل المتجر', 'Store operations'], ['عرض المنظومة هنا يركّز على نوع الحل والتجربة المتكاملة، مع روابط مباشرة للنسخ المنشورة على المتاجر.', 'This case study focuses on the solution and connected experience, with direct links to the published store versions.'],
  ['لديك مشروع', 'Have a project'], ['تريد تنفيذه؟', 'you want to build?'], ['شاركنا فكرتك وسيتواصل معك فريقنا لدراسة المتطلبات وتقديم المقترح المناسب.', 'Share your idea and our team will get back to you with the right proposal.'], ['واتساب / هاتف', 'WhatsApp / Phone'], ['البريد الإلكتروني', 'Email'], ['العنوان', 'Location'], ['القاهرة، مصر', 'Cairo, Egypt'], ['جميع الحقوق محفوظة.', 'All rights reserved.'], ['© 2025 LoopTech. جميع الحقوق محفوظة.', '© 2025 LoopTech. All rights reserved.'],
  ['لماذا LoopTech', 'Why LoopTech'], ['فريق واحد', 'One team'], ['لكل مرحلة', 'for every stage'], ['مشاريع مختارة', 'Selected projects'], ['من شغلنا الحقيقي', 'from our real work'], ['ستة نماذج من مشاريعنا الحالية، وباقي الأعمال موجودة في صفحة المشاريع الكاملة.', 'Six examples from our current projects. The rest are available on the full work page.'], ['من نموذج Static بسيط إلى منتج كامل بواجهة مستخدم، لوحة تحكم، صلاحيات، دفع، وتحليلات.', 'From a simple static concept to a complete product with UX, dashboards, permissions, payments, and analytics.'], ['تجربة متعددة الأطراف تشمل الطلب، إدارة المتجر، توزيع الرحلات، وتتبع حالة الطلب.', 'A multi-sided experience covering ordering, merchant operations, dispatch, and order tracking.'], ['عرض كل المشاريع ←', 'View all projects →'], ['من أول تصور للفكرة حتى الإطلاق والدعم، بنبني معك منتجًا مفهومًا، قابلًا للقياس، وقابلًا للتوسع.', 'From the first idea to launch and support, we build a clear, measurable, and scalable product with you.'], ['نفهم قبل ما نبني', 'We understand before we build'], ['نبدأ بأهداف المشروع والمستخدمين والسوق قبل اختيار الحل التقني.', 'We start with your goals, users, and market before choosing the technology.'], ['شوف منهجيتنا ←', 'See our process →'], ['نصمم التجربة كاملة', 'We design the full experience'], ['واجهة واضحة، رحلة مستخدم منطقية، ونظام بصري يحافظ على ثقة العميل.', 'A clear interface, a logical user journey, and a visual system that builds trust.'], ['استكشف الحلول ←', 'Explore solutions →'], ['نطلق ونطوّر', 'Launch and evolve'], ['نسلّم منتجًا جاهزًا للنمو، مع أساس تقني يسمح بإضافة المزايا لاحقًا.', 'We deliver a growth-ready product with a technical foundation for what comes next.'], ['ابدأ محادثة ←', 'Start a conversation →'], ['تشتغل كنظام واحد', 'works as one system'], ['ع الطلب بلس مثال على منتج متعدد الأطراف يربط العميل بالتاجر والسائق في تجربة توصيل واحدة.', 'Al Talab Plus is an example of a multi-sided product connecting customers, merchants, and drivers in one delivery experience.'], ['شاهد المنظومة', 'See the ecosystem'], ['تثبت نفسها', 'that prove themselves'], ['نماذج من المنتجات والمواقع التي بنيناها في مجالات مختلفة وأسواق متعددة.', 'Selected products and websites we built across different industries and markets.'], ['منصة React تعرض البرامج التدريبية وتتيح التسجيل والتواصل بشكل سهل وعصري.', 'A React platform showcasing training programs with simple registration and contact.'], ['موقع Laravel لحجز الخدمات وعرض العروض بشكل منظم واحترافي.', 'A Laravel website for structured service booking and offers.'], ['منصة لحجز الدروس وشراء الكتب مع داشبورد إدارية للمعلمين والإدارة.', 'A platform for lesson booking and online books with an admin dashboard.'], ['منصة بسيطة وذكية لتتبع المهام والمشاريع ومساعدة الفرق على البقاء منظمة.', 'A simple, smart platform for tracking tasks and keeping teams organized.'], ['إنشاء الاختبارات وإدارتها وتحليل نتائج الطلاب بشكل تلقائي ومرئي.', 'Create, manage, and visualize student results automatically.'], ['موقع يعرض البرامج والمعلمين ويتيح التسجيل للناطقين بالفرنسية.', 'A website presenting programs and teachers with registration for French speakers.'], ['شريك تقني يساعدك على تحويل الفكرة إلى منتج رقمي واضح، قابل للنمو، ومبني على احتياج حقيقي.', 'A technology partner helping you turn your idea into a clear, scalable digital product built around a real need.'], ['ممكن تبعت لنا', 'You can send us'], ['فكرة المشروع أو المشكلة', 'The project idea or problem'], ['نوع المستخدمين المستهدفين', 'Your target users'], ['المزايا الأساسية المطلوبة', 'The essential features'], ['الوقت المتوقع للإطلاق', 'Your expected launch timeline'], ['ابدأ من هنا', 'Start here'], ['قبل ما تتواصل', 'Before you reach out'], ['تطبيقات', 'Apps'], ['Customer', 'Customer'], ['عميل', 'Customer']
]);

const enToAr = new Map([...arToEn].map(([ar, en]) => [en, ar]));
const mixedMarkup = {
  hero: { ar: 'من الفكرة<br>إلى <span class="grad">المنتج</span>', en: 'From idea<br>to <span class="grad">product</span>' },
  projects: { ar: 'مشاريع أثبتت<br>نفسها في السوق', en: 'Projects that<br>proved themselves' },
  services: { ar: 'حلول رقمية<br>متكاملة', en: 'Complete<br>digital solutions' },
  about: { ar: 'نهج مختلف<br>في بناء المنتجات', en: 'A different approach<br>to building products' },
  apps: { ar: 'ع الطلب بلس<br><span class="grad-text">تجربة واحدة، 3 أدوار</span>', en: 'Al Talab Plus<br><span class="grad-text">One experience, three roles</span>' },
  capabilities: { ar: 'أي فكرة رقمية<br><span class="grad-text">لها طريق للتنفيذ</span>', en: 'Every digital idea<br><span class="grad-text">has a path to launch</span>' },
  cta: { ar: 'لديك مشروع<br>تريد تنفيذه؟', en: 'Have a project<br>you want to build?' }
};

document.documentElement.setAttribute('data-theme', 'light');

const sharedFallbacks = {
  'partials/nav.html': `<nav>
    <a href="index.html" class="nav-logo">Loop<span>Tech</span></a>
    <ul class="nav-links">
      <li><a href="index.html">الرئيسية</a></li>
      <li><a href="work.html">المشاريع</a></li>
      <li><a href="apps.html">حلول تطبيقية</a></li>
      <li><a href="solutions.html">نقدر نبني</a></li>
      <li><a href="about.html">من نحن</a></li>
      <li><a href="index.html#contact">تواصل معنا</a></li>
    </ul>
    <div class="nav-actions" aria-label="Page controls">
      <button class="lang-btn" onclick="toggleLanguage()" aria-label="Switch to English" title="Switch to English">EN</button>
      <button class="theme-btn" onclick="toggleTheme()" aria-label="تفعيل الوضع الداكن" title="تفعيل الوضع الداكن">☾</button>
    </div>
  </nav>`,
  'partials/footer.html': `<footer>
    <p>© 2025 LoopTech. جميع الحقوق محفوظة.</p>
    <a href="index.html" class="nav-logo" style="font-size:16px;">Loop<span>Tech</span></a>
  </footer>`
};

async function loadIncludes() {
  const includeNodes = [...document.querySelectorAll('[data-include]')];
  await Promise.all(includeNodes.map(async (node) => {
    const includePath = node.dataset.include;
    try {
      const response = await fetch(includePath);
      if (!response.ok) throw new Error(`Could not load ${includePath}`);
      node.outerHTML = await response.text();
    } catch (error) {
      console.warn(`Using fallback for ${includePath}`, error);
      node.outerHTML = sharedFallbacks[includePath] || '';
    }
  }));
}

function markCurrentNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage) link.classList.add('is-current');
  });
}

function setMarkup(selector, values, language) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = values[language];
}

function translatePage(language) {
  const dictionary = language === 'en' ? arToEn : enToAr;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    const value = node.nodeValue.trim();
    if (!value || !dictionary.has(value)) return;
    node.nodeValue = node.nodeValue.replace(value, dictionary.get(value));
  });
  setMarkup('.hero h1', mixedMarkup.hero, language);
  setMarkup('#projects .section-title', mixedMarkup.projects, language);
  setMarkup('#services .section-title', mixedMarkup.services, language);
  setMarkup('#about .section-title', mixedMarkup.about, language);
  setMarkup('#app-suite .section-title', mixedMarkup.apps, language);
  setMarkup('#capabilities .section-title', mixedMarkup.capabilities, language);
  setMarkup('.cta-section h2', mixedMarkup.cta, language);
  document.documentElement.lang = language === 'en' ? 'en' : 'ar';
  document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
  document.title = language === 'en' ? 'LoopTech — We build the web, we make a difference' : 'LoopTech — نبني الويب، نصنع الفرق';
  const button = document.querySelector('.lang-btn');
  if (!button) return;
  button.textContent = language === 'en' ? 'عربي' : 'EN';
  button.setAttribute('aria-label', language === 'en' ? 'التبديل إلى العربية' : 'Switch to English');
  button.setAttribute('title', language === 'en' ? 'التبديل إلى العربية' : 'Switch to English');
  const themeButton = document.querySelector('.theme-btn');
  if (themeButton) themeButton.setAttribute('aria-label', language === 'en' ? 'Enable dark mode' : 'تفعيل الوضع الداكن');
  localStorage.setItem('looptech-language', language);
}

function toggleLanguage() {
  const current = document.documentElement.lang === 'en' ? 'en' : 'ar';
  translatePage(current === 'ar' ? 'en' : 'ar');
}

function toggleTheme() {
  const root = document.documentElement;
  const button = document.querySelector('.theme-btn');
  const isDark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  button.textContent = isDark ? '☾' : '☀';
  button.setAttribute('aria-label', isDark ? 'تفعيل الوضع الداكن' : 'تفعيل الوضع الفاتح');
  button.setAttribute('title', isDark ? 'تفعيل الوضع الداكن' : 'تفعيل الوضع الفاتح');
}

window.toggleTheme = toggleTheme;
window.toggleLanguage = toggleLanguage;

async function initializePage() {
  try {
    await loadIncludes();
    markCurrentNav();
  } catch (error) {
    console.error('Shared layout could not be loaded:', error);
  }
  const savedLanguage = localStorage.getItem('looptech-language');
  translatePage(savedLanguage === 'en' ? 'en' : 'ar');
}

initializePage();
