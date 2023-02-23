import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
    return (
        <div>
            <div>
                <Link href="/page1">page1</Link>
            </div>
            <div>
                <Link href="/page2">page2</Link>
            </div>
            <Component {...pageProps} />
        </div>
    );
}
