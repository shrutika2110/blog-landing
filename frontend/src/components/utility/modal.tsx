import Header from "@/app/sections/header";


export default function Modal({children}:any) {

    return (
       <div className="fixed top-0 right-0 left-0 w-full h-full max-h-screen z-100 bg-blur-md overflow-hidden bg-white bg-opacity-80 ">
            <Header />
            {children}
       </div>
    );
};
