import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Lock, Eye, Database, UserCheck } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background" dir="rtl">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowRight className="w-4 h-4 ml-2" />
              العودة للرئيسية
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">سياسة الخصوصية</h1>
              <p className="text-muted-foreground">آخر تحديث: يناير 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">المقدمة</h2>
                <p className="text-foreground leading-relaxed">
                  تلتزم شركة زين الكويت بحماية خصوصية عملائنا. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية
                  المعلومات الشخصية التي نحصل عليها من مستخدمي خدماتنا.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">جمع المعلومات</h2>
                <p className="text-foreground leading-relaxed mb-3">نقوم بجمع المعلومات التالية:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
                  <li>معلومات التعريف الشخصية (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
                  <li>معلومات الفوترة والدفع</li>
                  <li>بيانات استخدام الخدمة</li>
                  <li>معلومات الموقع الجغرافي (عند الموافقة)</li>
                  <li>بيانات الجهاز والمتصفح</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">استخدام المعلومات</h2>
                <p className="text-foreground leading-relaxed mb-3">نستخدم المعلومات المجمعة للأغراض التالية:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
                  <li>تقديم وتحسين خدماتنا</li>
                  <li>معالجة المعاملات والفواتير</li>
                  <li>التواصل مع العملاء بشأن الخدمات والعروض</li>
                  <li>تخصيص تجربة المستخدم</li>
                  <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
                  <li>حماية أمن وسلامة شبكتنا</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">حماية البيانات</h2>
                <p className="text-foreground leading-relaxed">
                  نستخدم تدابير أمنية متقدمة لحماية معلوماتك، بما في ذلك التشفير، وجدران الحماية، والمصادقة الآمنة. نقوم
                  بمراجعة وتحديث بروتوكولات الأمان بانتظام لضمان أعلى مستويات الحماية.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">مشاركة المعلومات</h2>
            <p className="text-foreground leading-relaxed mb-3">
              لن نقوم بمشاركة معلوماتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>بموافقتك الصريحة</li>
              <li>لمقدمي الخدمات الذين يساعدوننا في تشغيل أعمالنا</li>
              <li>عند الضرورة القانونية أو الامتثال للوائح</li>
              <li>لحماية حقوق وسلامة زين وعملائنا</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">حقوقك</h2>
            <p className="text-foreground leading-relaxed mb-3">لديك الحق في:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح أو تحديث معلوماتك</li>
              <li>حذف بياناتك (وفقاً للقيود القانونية)</li>
              <li>الاعتراض على معالجة بياناتك</li>
              <li>نقل بياناتك إلى مزود خدمة آخر</li>
              <li>سحب الموافقة في أي وقت</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">ملفات تعريف الارتباط (Cookies)</h2>
            <p className="text-foreground leading-relaxed">
              نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتحسين تجربتك على موقعنا. يمكنك التحكم في استخدام
              ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك. لمزيد من المعلومات، يرجى الاطلاع على سياسة ملفات
              تعريف الارتباط الخاصة بنا.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">التغييرات على السياسة</h2>
            <p className="text-foreground leading-relaxed">
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات جوهرية من خلال نشر السياسة
              المحدثة على موقعنا وتحديث تاريخ "آخر تحديث".
            </p>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-semibold text-foreground mb-3">اتصل بنا</h2>
            <p className="text-foreground leading-relaxed mb-3">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
            </p>
            <div className="space-y-2 text-foreground">
              <p>
                <strong>البريد الإلكتروني:</strong> privacy@kw.zain.com
              </p>
              <p>
                <strong>الهاتف:</strong> 107 (من داخل الكويت)
              </p>
              <p>
                <strong>العنوان:</strong> زين الكويت، الكويت
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
