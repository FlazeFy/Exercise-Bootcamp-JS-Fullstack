import OrganismsRegisterForm from "@/components/organisms/o_register_form";

export default function RegisterPage() {
    return (
        <div className="flex items-center justify-center lg:justify-end min-h-screen p-10" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/sample/background_2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
            <OrganismsRegisterForm/>
        </div>
    );
}
