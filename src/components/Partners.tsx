import { Card } from "@/components/ui/card";
import Partner1 from "../assets/partners/BUA.png";
import Partner2 from "../assets/partners/GELCM.webp";
import Partner3 from "../assets/partners/FEDERAL.webp";
import Partner4 from "../assets/partners/NHL.jpg";
import Partner5 from "../assets/partners/NORT.jpeg";
import Partner6 from "../assets/partners/NASENI.jpg";
import Partner7 from "../assets/partners/METRODECK.png";


// Placeholder data - Replace with actual imports and links
const partners = [
    {
        name: "BUA Group",
        logo: Partner1,
        link: "#",
    },
    {
        name: "GELCM",
        logo: Partner2,
        link: "#",
    },
    {
        name: "Federal Ministry",
        logo: Partner3,
        link: "#",
    },
    {
        name: "NHL",
        logo: Partner4,
        link: "#",
    },
    {
        name: "North China",
        logo: Partner5,
        link: "#",
    },
    {
        name: "NASENI",
        logo: Partner6,
        link: "#",
    },
    {
        name: "Metrodeck",
        logo: Partner7,
        link: "#",
    },
];

const Partners = () => {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container">
                <div className="text-center mb-10">
                    <h2 className="font-heading text-2xl font-bold sm:text-3xl mb-4">
                        Our Trusted Partners
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Collaborating with industry leaders to deliver excellence.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group w-full max-w-[180px] flex items-center justify-center p-4 transition-all duration-300 hover:scale-105"
                        >
                            {partner.logo ? (
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-auto transition-all duration-300"
                                />
                            ) : (
                                // Placeholder for when no logo is available
                                <Card className="w-full h-24 flex items-center justify-center bg-background border-dashed border-2 text-center p-2 group-hover:border-primary/50 transition-colors">
                                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary">
                                        {partner.name} Logo
                                    </span>
                                </Card>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
