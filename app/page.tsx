import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, Globe, CreditCard, Receipt } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background" dir="rtl">
      <div className="container max-w-2xl mx-auto px-4 py-12">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-4xl font-bold">Zain</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2 text-balance text-center"></h1>
          <p className="text-muted-foreground text-center text-pretty">رائد الاتصالات والابتكار الرقمي في الكويت</p>
        </div>

        {/* Payment and Bills Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">خدمات الدفع</h2>

          <Link href="https://www.kw.zain.com/quick-pay" target="_blank" rel="noopener noreferrer">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer border-primary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">الدفع السريع</h3>
                  <p className="text-sm text-muted-foreground">ادفع فواتيرك بسرعة وأمان</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="https://www.kw.zain.com/bill-payment" target="_blank" rel="noopener noreferrer">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer border-secondary/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <Receipt className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">دفع الفواتير</h3>
                  <p className="text-sm text-muted-foreground">شاهد وادفع فواتيرك الشهرية</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Main Links */}
        <div className="space-y-4 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">خدماتنا</h2>

          <Link href="https://www.kw.zain.com" target="_blank" rel="noopener noreferrer">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">الموقع الرسمي</h3>
                  <p className="text-sm text-muted-foreground">زوروا موقعنا الرسمي لمعرفة المزيد</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="https://www.kw.zain.com/personal" target="_blank" rel="noopener noreferrer">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">الباقات والعروض</h3>
                  <p className="text-sm text-muted-foreground">اكتشف أفضل باقات الاتصالات والإنترنت</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="https://www.kw.zain.com/support" target="_blank" rel="noopener noreferrer">
            <Card className="p-4 hover:bg-accent transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">خدمة العملاء</h3>
                  <p className="text-sm text-muted-foreground">نحن هنا لمساعدتك على مدار الساعة</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">تابعونا على وسائل التواصل</h2>
          <div className="flex justify-center gap-4">
            <Link href="https://instagram.com/zainkuwait" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <Instagram className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://facebook.com/zainkuwait" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <Facebook className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://twitter.com/zainkuwait" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <Twitter className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://youtube.com/zainkuwait" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="outline" className="rounded-full bg-transparent">
                <Youtube className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col items-center gap-3 text-sm">
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors underline">
              سياسة الخصوصية
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/security" className="text-muted-foreground hover:text-foreground transition-colors underline">
              قواعد الأمان
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors underline">
              الشروط والأحكام
            </Link>
          </div>
          <p className="text-muted-foreground text-center">© 2025 . جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </main>
  )
}
