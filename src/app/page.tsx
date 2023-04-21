import Link from "next/link";
import SITE_URL from "@constant/siteUrl";
import LoginForm from "@app/login/LoginForm";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen gap-2">
            <header className={"text-neutral-700 text-5xl mb-2"}>LOGIN</header>
            <LoginForm/>
            <footer className={"flex gap-4 items-center justify-center"}>
                <Link href={SITE_URL.SIGN_UP} className={"text-[var(--main-pink)]"}>
                    회원가입
                </Link>
                <div className={"bg-white/60 w-[1px] h-4"}/>
                <Link
                    href={SITE_URL.RESET_PASSWORD}
                    className={"text-[var(--main-pink)]"}
                >
                    비밀번호 찾기
                </Link>
            </footer>
        </main>
    );
}
