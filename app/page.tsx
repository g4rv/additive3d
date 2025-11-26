import FAQ from "@/components/faq";
import HeroMain from "@/components/hero/hero-main/HeroMain";

export default function Home() {
  return (
    <>
      <HeroMain />
      <FAQ items={[{question: 'Gay?', answer: 'Gay', id: '1'}, {question: 'Gay?', answer: 'Gay', id: '1'}, {question: 'Gay?', answer: 'Gay', id: '1'}, {question: 'Gay?', answer: 'Gay', id: '1'}]} />
    </>
  );
}
