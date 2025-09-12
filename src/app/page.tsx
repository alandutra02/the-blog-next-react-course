import Container from "@/components/Container";
import Header from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

export default function HomePage() {
    return (
        <Container>
            <Header>
                <h1 className="text-4xl/normal font-extrabold py-8 sm:text-5xl/normal sm:py-10 md:text-6xl/normal md:py-11 lg:text-7xl/normal lg:py-12">
                    The Blog
                </h1>
            </Header>

            <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
                <Link className="w-full h-full overflow-hidden rounded-xl" href='#'>
                    <Image className="group-hover:scale-105 transition"
                        src='/images/bryen_0.png'
                        width={1200}
                        height={720}
                        alt="Titulo do Post"
                    />
                </Link>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vero cum expedita, tenetur doloremque laudantium quis ab laborum perferendis delectus quod earum suscipit? Repellat molestias minus tempore nostrum eligendi quae!</div>
            </section>
                {/* Suspense exibe o SpinLoader enquanto PostsList carrega */}
                <Suspense fallback={<SpinLoader />}>
                    <PostsList />
                </Suspense>

            <footer>
                <p className="text-6xl font-bold text-center py-8">Footer</p>
            </footer>
        </Container>
    );
}
