import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, TrendingUp, ShieldCheck, Leaf, Globe, Handshake, Lightbulb } from "lucide-react";
import TrustedPartners from "@/components/Partners";

const Partners = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-primary py-24 text-primary-foreground">
                <div className="container relative z-10 mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 font-heading text-4xl font-bold font-heading md:text-5xl lg:text-6xl">
                            Partner Relationship
                        </h1>
                        <p className="text-lg text-primary-foreground/90 md:text-xl">
                            Building trust, fostering collaboration, and driving mutual success.
                        </p>
                    </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
                </div>
            </section>

            {/* Client Engagement Strategy */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-4xl space-y-12">
                        <div className="text-center">
                            <h2 className="mb-6 font-heading text-3xl font-bold text-primary md:text-4xl">
                                Client Engagement Strategy
                            </h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                At Ballsbridge Contractors Ltd, our clients are at the heart of everything we do. Our client engagement strategy focuses on building long-term, trust-based relationships by delivering exceptional service, maintaining open communication, and ensuring client satisfaction throughout the project lifecycle.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <Card className="border-t-4 border-t-accent bg-card/50 shadow-sm transition-shadow hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <Handshake className="h-6 w-6 text-accent" />
                                        Partnership Opportunities
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">
                                        We believe in the power of strong partnerships to drive mutual success. Ballsbridge Contractors Ltd is always open to exploring new collaborations with industry leaders, innovative suppliers, and strategic partners. Our partnership approach is built on the following principles:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                            <span><span className="font-semibold text-foreground">Shared Vision:</span> Aligning our goals and objectives to achieve common success.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                            <span><span className="font-semibold text-foreground">Transparency:</span> Maintaining open and honest communication to build trust.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                            <span><span className="font-semibold text-foreground">Innovation:</span> Embracing new technologies and ideas to enhance project outcomes.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                            <span><span className="font-semibold text-foreground">Sustainability:</span> Committing to environmentally responsible practices in all our endeavors.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-t-4 border-t-secondary bg-card/50 shadow-sm transition-shadow hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl">
                                        <ShieldCheck className="h-6 w-6 text-secondary" />
                                        Building Strong Relationships
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Our approach to building strong client and partner relationships is based on a foundation of trust, mutual respect, and shared success. We are committed to:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                                            <span><span className="font-semibold text-foreground">Listening:</span> Understanding client needs, challenges, and goals to deliver tailored solutions.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                                            <span><span className="font-semibold text-foreground">Delivering Excellence:</span> Consistently meeting and exceeding expectations through high-quality workmanship.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                                            <span><span className="font-semibold text-foreground">Fostering Collaboration:</span> Encouraging an environment where ideas are shared, and innovation is embraced.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                                            <span><span className="font-semibold text-foreground">Ensuring Satisfaction:</span> Striving for complete client and partner satisfaction in every project.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals & Vision */}
            <section className="bg-muted/30 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                            Our Direction
                        </span>
                        <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">Strategic Goals & Long Term Vision</h2>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 font-heading text-2xl font-bold text-primary">
                                    <Target className="h-6 w-6" /> Strategic Goals
                                </h3>
                                <div className="space-y-6">
                                    <div className="relative border-l-2 border-primary/20 pl-6">
                                        <h4 className="mb-2 text-xl font-semibold">Expand Market Presence</h4>
                                        <p className="mb-2 text-sm font-medium text-muted-foreground">Goal: Increase market share by entering new geographic regions and market segments.</p>
                                        <p className="text-muted-foreground">Strategy: Identify and pursue opportunities in high-growth areas, including emerging markets and underserved regions.</p>
                                    </div>
                                    <div className="relative border-l-2 border-primary/20 pl-6">
                                        <h4 className="mb-2 text-xl font-semibold">Promote Sustainability</h4>
                                        <p className="mb-2 text-sm font-medium text-muted-foreground">Goal: Become a leader in sustainable construction practices.</p>
                                        <p className="text-muted-foreground">Strategy: Implement green building practices, reduce carbon footprint, and achieve higher levels of environmental certification for our projects.</p>
                                    </div>
                                    <div className="relative border-l-2 border-primary/20 pl-6">
                                        <h4 className="mb-2 text-xl font-semibold">Enhance Technological Capabilities</h4>
                                        <p className="mb-2 text-sm font-medium text-muted-foreground">Goal: Leverage technology to improve project efficiency, quality, and safety.</p>
                                        <p className="text-muted-foreground">Strategy: Invest in state-of-the-art construction technologies and train our workforce to maximize their benefits.</p>
                                    </div>
                                    <div className="relative border-l-2 border-primary/20 pl-6">
                                        <h4 className="mb-2 text-xl font-semibold">Improve Operational Efficiency</h4>
                                        <p className="mb-2 text-sm font-medium text-muted-foreground">Goal: Optimize operational processes to reduce costs and improve project delivery times.</p>
                                        <p className="text-muted-foreground">Strategy: Streamline workflows, adopt lean construction principles, and enhance supply chain management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 font-heading text-2xl font-bold text-primary">
                                    <Globe className="h-6 w-6" /> Long Term Vision
                                </h3>
                                <p className="mb-4 text-muted-foreground">
                                    Ballsbridge Contractors Ltd envisions a future where we are recognized as a global leader in construction excellence, sustainability, and innovation. Our long-term vision is to:
                                </p>
                                <ul className="grid gap-4">
                                    {[
                                        "Set new standards for quality and safety in the construction industry.",
                                        "Lead the way in sustainable building practices and environmental stewardship.",
                                        "Foster a culture of continuous improvement, creativity, and collaboration."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 rounded-lg border bg-background p-4 shadow-sm">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Lightbulb className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-medium md:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Future Outlook */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mb-8 font-heading text-3xl font-bold md:text-4xl text-primary">Future Outlook</h2>
                        <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                            As Ballsbridge Contractors Ltd looks ahead, we are poised to capitalize on emerging opportunities and navigate industry challenges with a focus on innovation, sustainability, and growth. Our future outlook is shaped by the following key trends and market drivers:
                        </p>

                        <div className="grid gap-6 sm:grid-cols-3">
                            {[
                                { title: "Sustainable Construction", icon: Leaf },
                                { title: "Technological Advancement", icon: TrendingUp },
                                { title: "Urbanisation & Infrastructure", icon: Users }
                            ].map((item, idx) => (
                                <div key={idx} className="group flex flex-col items-center gap-4 rounded-xl border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-heading text-lg font-bold">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TrustedPartners />
            <Footer />
        </div>
    );
};

export default Partners;
