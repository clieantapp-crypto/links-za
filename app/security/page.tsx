import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Lock, AlertTriangle, Key, Smartphone, Bell } from "lucide-react"
import Link from "next/link"

export default function SecurityRules() {
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
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground text-balance">قواعد الأمان</h1>
              <p className="text-muted-foreground">إرشادات لحماية حسابك ومعلوماتك</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">أمان كلمة المرور</h2>
                <p className="text-foreground leading-relaxed mb-3">
                  لحماية حسابك، يجب اتباع إرشادات كلمة المرور التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
                  <li>استخدم كلمة مرور قوية تحتوي على 8 أحرف على الأقل</li>
                  <li>اجمع بين الأحرف الكبيرة والصغيرة والأرقام والرموز</li>
                  <li>لا تستخدم معلومات شخصية يسهل تخمينها</li>
                  <li>لا تشارك كلمة المرور الخاصة بك مع أي شخص</li>
                  <li>قم بتغيير كلمة المرور بانتظام (كل 3-6 أشهر)</li>
                  <li>استخدم كلمات مرور مختلفة لحسابات مختلفة</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Key className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">المصادقة الثنائية (2FA)</h2>
                <p className="text-foreground leading-relaxed mb-3">
                  نوصي بشدة بتفعيل المصادقة الثنائية لطبقة أمان إضافية:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
                  <li>تفعيل المصادقة عبر الرسائل النصية (SMS)</li>
                  <li>استخدام تطبيقات المصادقة مثل Google Authenticator</li>
                  <li>الاحتفاظ برموز النسخ الاحتياطي في مكان آمن</li>
                  <li>تحديث معلومات الاتصال بانتظام</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">التحذير من الاحتيال</h2>
                <p className="text-foreground leading-relaxed mb-3">كن حذراً من محاولات الاحتيال والتصيد الاحتيالي:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
                  <li>لن نطلب منك أبداً كلمة المرور عبر البريد الإلكتروني أو الهاتف</li>
                  <li>تحقق من المرسل قبل النقر على أي روابط</li>
                  <li>لا تشارك رموز التحقق OTP مع أي شخص</li>
                  <li>احذر من الرسائل المشبوهة التي تطلب معلومات شخصية</li>
                  <li>تحقق دائماً من عنوان URL قبل إدخال بيانات تسجيل الدخول</li>
                  <li>أبلغ فوراً عن أي نشاط مشبوه</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">أمان الجهاز</h2>
                <p className="text-foreground leading-relaxed mb-3">قم بحماية أجهزتك للحفاظ على أمان حسابك:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
                  <li>قم بتثبيت التحديثات الأمنية فور توفرها</li>
                  <li>استخدم برنامج مكافحة فيروسات موثوق</li>
                  <li>تجنب استخدام شبكات Wi-Fi العامة غير الآمنة</li>
                  <li>قم بقفل جهازك برمز PIN أو بصمة الإصبع</li>
                  <li>لا تقم بتجذير (Root) أو كسر حماية (Jailbreak) جهازك</li>
                  <li>قم بتسجيل الخروج من التطبيقات على الأجهزة المشتركة</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">مراقبة الحساب</h2>
                <p className="text-foreground leading-relaxed mb-3">راقب نشاط حسابك بانتظام:</p>
                <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
                  <li>راجع سجل النشاط والأجهزة المتصلة</li>
                  <li>تحقق من الفواتير والمعاملات بانتظام</li>
                  <li>فعّل إشعارات الأمان لتنبيهات تسجيل الدخول</li>
                  <li>أبلغ فوراً عن أي نشاط غير مصرح به</li>
                  <li>راجع وحدّث معلومات الأمان الخاصة بك</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">الامتثال للقوانين</h2>
            <p className="text-foreground leading-relaxed mb-3">يجب على جميع المستخدمين الالتزام بما يلي:</p>
            <ul className="list-disc list-inside space-y-2 text-foreground mr-4">
              <li>استخدام الخدمات بطرق قانونية ومشروعة فقط</li>
              <li>عدم انتهاك حقوق الآخرين أو خصوصيتهم</li>
              <li>عدم إرسال محتوى مسيء أو ضار</li>
              <li>الامتثال لجميع القوانين واللوائح المحلية</li>
              <li>عدم محاولة الوصول غير المصرح به إلى الأنظمة</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-foreground mb-3">الاستخدام المسؤول</h2>
            <p className="text-foreground leading-relaxed">
              نتوقع من جميع مستخدمينا استخدام خدماتنا بمسؤولية. يشمل ذلك احترام حقوق الآخرين، وعدم إساءة استخدام الشبكة،
              والحفاظ على أمان معلوماتهم الشخصية. نحتفظ بالحق في تعليق أو إنهاء الحسابات التي تنتهك شروط الاستخدام أو
              قواعد الأمان.
            </p>
          </Card>

          <Card className="p-6 bg-destructive/5 border-destructive/20">
            <h2 className="text-2xl font-semibold text-foreground mb-3">الإبلاغ عن مشكلات الأمان</h2>
            <p className="text-foreground leading-relaxed mb-3">
              إذا اكتشفت ثغرة أمنية أو لاحظت نشاطاً مشبوهاً، يرجى الإبلاغ عنه فوراً:
            </p>
            <div className="space-y-2 text-foreground">
              <p>
                <strong>البريد الإلكتروني:</strong> security@kw.zain.com
              </p>
              <p>
                <strong>الهاتف الساخن للأمان:</strong> 107
              </p>
              <p>
                <strong>متوفر:</strong> 24/7
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
