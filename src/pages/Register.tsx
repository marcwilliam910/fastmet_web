import Form from "@/components/register/Form";
import Info from "@/components/register/Info";

export default function Register() {
  return (
    <section className="flex my-20 px-4">
      <div className="flex flex-col items-center justify-center gap-10">
        <Info />
        <Form />
      </div>
    </section>
  );
}
