import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Scale, Users, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function Terms() {
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
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">الشروط والأحكام</h1>
              <p className="text-muted-foreground">شروط استخدام خدمات </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">قبول الشروط</h2>
                <p className="text-foreground leading-relaxed">
                  باستخدامك لخدمات ، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من
                  هذه الشروط، يرجى عدم استخدام خدماتنا. نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم إخطارك بأي
                  تغييرات مهمة.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">استخدام الخدمات</h2>
                <p className="text-foreground leading-relaxed mb-3">عند استخدام خدماتنا، توافق على:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
                  <li>تقديم معلومات دقيقة وكاملة</li>
                  <li>الحفاظ على أمان حسابك وبيانات تسجيل الدخول</li>
                  <li>استخدام الخدمات للأغراض المشروعة فقط</li>
                  <li>عدم انتهاك حقوق الملكية الفكرية</li>
                  <li>الامتثال لجميع القوانين واللوائح المعمول بها</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">الباقات والتسعير</h2>
            <p className="text-foreground leading-relaxed mb-3">جميع الأسعار والرسوم المعلنة:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>تخضع للتغيير دون إشعار مسبق</li>
              <li>تشمل الضرائب والرسوم المطبقة</li>
              <li>يتم احتسابها وفقاً لخطة الاستخدام المختارة</li>
              <li>تتطلب دفع الفواتير في المواعيد المحددة</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">الفواتير والدفع</h2>
            <p className="text-foreground leading-relaxed mb-3">الشروط المتعلقة بالفواتير والدفع:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>يتم إصدار الفواتير شهرياً أو حسب الباقة المختارة</li>
              <li>يجب سداد الفواتير خلال 15 يوماً من تاريخ الإصدار</li>
              <li>قد يتم تعليق الخدمة في حالة التأخر في الدفع</li>
              <li>تطبق رسوم تأخير على المدفوعات المتأخرة</li>
              <li>جميع المدفوعات غير قابلة للاسترداد ما لم ينص على خلاف ذلك</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">جودة الخدمة</h2>
            <p className="text-foreground leading-relaxed">
              نبذل قصارى جهدنا لتوفير خدمة عالية الجودة، ولكن لا يمكننا ضمان توفر الخدمة بنسبة 100٪. قد تتأثر جودة
              الخدمة بعوامل خارجة عن سيطرتنا مثل الظروف الجوية، أو الكوارث الطبيعية، أو أعمال الصيانة الضرورية.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">إلغاء الخدمة</h2>
            <p className="text-foreground leading-relaxed mb-3">يمكنك إلغاء خدماتك في أي وقت من خلال:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>الاتصال بخدمة العملاء على 107</li>
              <li>زيارة أحد فروعنا</li>
              <li>استخدام تطبيق أو موقع </li>
            </ul>
            <p className="text-foreground leading-relaxed mt-3">قد تطبق رسوم إلغاء مبكر على بعض الباقات.</p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">حقوق الملكية الفكرية</h2>
            <p className="text-foreground leading-relaxed">
              جميع المحتويات والمواد المتوفرة على منصاتنا، بما في ذلك الشعارات والعلامات التجارية والنصوص والصور، هي ملك
              لشركة  أو مرخصيها. لا يجوز استخدامها أو نسخها أو توزيعها دون إذن كتابي مسبق.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">تحديد المسؤولية</h2>
            <p className="text-foreground leading-relaxed">
              لن تكون  مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام أو عدم
              القدرة على استخدام خدماتنا، ما لم ينص القانون على خلاف ذلك.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">القانون الحاكم</h2>
            <p className="text-foreground leading-relaxed">
              تخضع هذه الشروط والأحكام لقوانين دولة الكويت. أي نزاع ينشأ عن هذه الشروط يخضع للاختصاص القضائي الحصري
              لمحاكم الكويت.
            </p>
          </Card>

          <Card className="p-6 bg-accent/5 border-accent/20">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">الاستفسارات</h2>
                <p className="text-foreground leading-relaxed mb-3">
                  لأي استفسارات حول الشروط والأحكام، يرجى التواصل معنا:
                </p>
                <div className="space-y-2 text-foreground">
                  <p>
                    <strong>خدمة العملاء:</strong> 107
                  </p>
                  <p>
                    <strong>البريد الإلكتروني:</strong> support@kw.zain.com
                  </p>
                  <p>
                    <strong>الموقع:</strong> www.kw.zain.com
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
