import OrganismsLoginForm from "@/components/organisms/o_login_form";

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center lg:justify-end min-h-screen p-10" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/sample/background_2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
            <OrganismsLoginForm/>
        </div>
    );
}
