import Image from 'next/image';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { SpecialtyExplorer } from '@/components/sections/SpecialtyExplorer';
import { Plans } from '@/components/sections/Plans';

export default function Home() {
  return (
    <SiteShell>
      <section className='home-hero'>
        <div className='hero-copy'>
          <p className='eyebrow'>INSTITUTO MARSALIA</p>
          <h1><span>Saúde, movimento</span><span>e cuidado em um só lugar.</span></h1>
          <div className='hero-bottom'>
            <p>Um espaço integrado para cuidar de você com excelência, proximidade e continuidade.</p>
            <div className='hero-actions'>
              <Link href='#contato' className='button button-light'>Agendar atendimento <span>↗</span></Link>
              <Link href='#pilates' className='text-link'>Conhecer o Pilates <span>↗</span></Link>
            </div>
          </div>
        </div>
        <div className='hero-photo' aria-hidden='true'>
          <Image src='/images/recepcao-2.jpg' alt='' fill priority sizes='(max-width: 760px) 100vw, 50vw' className='hero-image' />
          <span className='hero-photo-index'>01 / 09</span>
        </div>
        <div className='scroll-cue'><span /> Role para descobrir</div>
      </section>
      <section className='manifesto-section'>
        <p className='section-label' data-reveal>01 — CUIDADO INTEGRADO</p>
        <div>
          <h2 data-reveal>Não cuidamos de partes.<br />Cuidamos de pessoas.</h2>
          <p className='manifesto-lead' data-reveal>No Marsalia, diferentes áreas da saúde se encontram para oferecer uma experiência mais completa, próxima e integrada.</p>
        </div>
      </section>
      <section className='movement-section' id='movimento'>
        <div className='movement-photo'>
          <Image src='/images/recepcao-3.jpg' alt='Recepção do Instituto Marsalia com a frase o movimento cura' fill sizes='(max-width: 800px) 100vw, 48vw' />
        </div>
        <div className='movement-copy'>
          <p className='section-label'>02 — MOVIMENTO</p>
          <blockquote data-reveal>o movimento<br />cura.</blockquote>
          <p data-reveal>O corpo foi feito para se mover. Com orientação, constância e cuidado, o movimento se transforma em qualidade de vida.</p>
        </div>
      </section>
      <section className='pilates-feature' id='pilates'>
        <div className='pilates-sticky'>
          <Image data-parallax src='/images/pilates.jpg' alt='Sala de Pilates do Instituto Marsalia com equipamentos e espelhos em arco' fill sizes='(max-width: 900px) 100vw, 50vw' />
          <span>03 — PILATES</span>
        </div>
        <div className='pilates-story'>
          <p className='section-label'>PRINCIPAL EXPERIÊNCIA DE MOVIMENTO</p>
          <h2 data-reveal>Pilates<br />no Marsalia.</h2>
          <h3 data-reveal>Movimento acompanhado.<br />Evolução individual.</h3>
          <p className='pilates-lead' data-reveal>Um cuidado pensado para respeitar seu corpo, sua rotina e seus objetivos.</p>
          <ol className='editorial-list'>
            <li><span>01</span><p>Avaliação inicial individualizada</p></li>
            <li><span>02</span><p>Aulas em grupos reduzidos</p></li>
            <li><span>03</span><p>Exercícios direcionados às suas necessidades e objetivos</p></li>
            <li><span>04</span><p>Acompanhamento profissional durante as aulas</p></li>
          </ol>
          <Link href='#planos' className='button button-dark'>Conhecer o Pilates <span>↗</span></Link>
        </div>
      </section>
      <section className='integrated-section' id='instituto'>
        <div className='integrated-copy' data-reveal>
          <p className='section-label'>04 — INTEGRAÇÃO</p>
          <h2>Um lugar.<br />Diferentes formas de cuidar de você.</h2>
          <p>Fisioterapia, Pilates, odontologia, psicologia, nutrição e outras especialidades convivem em um mesmo espaço, tornando sua jornada de cuidado mais simples, próxima e contínua.</p>
        </div>
        <div className='marquee' aria-label='Especialidades do Instituto Marsalia'>
          <div>PILATES — FISIOTERAPIA — NUTRIÇÃO — PSICOLOGIA — ODONTOLOGIA — SAÚDE INTEGRADA — PILATES — FISIOTERAPIA — NUTRIÇÃO —</div>
        </div>
      </section>
      <SpecialtyExplorer />
      <section className='space-section' id='espaco'>
        <div className='space-heading' data-reveal>
          <p className='section-label'>05 — O ESPAÇO</p>
          <h2>Um espaço pensado<br />para cuidar.</h2>
          <p>Conforto, funcionalidade e acolhimento em cada detalhe.</p>
        </div>
        <div className='space-gallery'>
          <figure className='gallery-wide'><Image src='/images/pilates.jpg' alt='Sala de Pilates com iluminação quente e espelhos em arco' fill sizes='100vw' /><figcaption>Movimento</figcaption></figure>
          <figure className='gallery-tall'><Image src='/images/odontologia-1.jpg' alt='Consultório odontológico do Instituto Marsalia' fill sizes='(max-width: 700px) 100vw, 42vw' /><figcaption>Precisão</figcaption></figure>
          <figure className='gallery-small'><Image src='/images/detail.jpg' alt='Detalhe de marcenaria e iluminação indireta' fill sizes='(max-width: 700px) 100vw, 28vw' /><figcaption>Conforto</figcaption></figure>
          <figure className='gallery-offset'><Image src='/images/psicologia.jpg' alt='Ambiente de atendimento com mobiliário claro e madeira' fill sizes='(max-width: 700px) 100vw, 35vw' /><figcaption>Acolhimento</figcaption></figure>
          <figure className='gallery-end'><Image src='/images/recepcao-1.jpg' alt='Recepção do Instituto Marsalia com logo e linhas curvas' fill sizes='(max-width: 700px) 100vw, 50vw' /><figcaption>Integração</figcaption></figure>
        </div>
      </section>
      <Plans compact />
      <section className='experience-section'>
        <div className='experience-image'><Image src='/images/recepcao-4.jpg' alt='Detalhe da recepção do Instituto Marsalia' fill sizes='(max-width: 800px) 100vw, 42vw' /></div>
        <div data-reveal>
          <p className='section-label'>06 — CONTINUIDADE</p>
          <h2>Cuidado que<br />acompanha você.</h2>
          <p>Mais do que reunir especialidades, o Marsalia foi pensado para criar continuidade entre cuidado, movimento, prevenção e bem-estar.</p>
          <Link href='#instituto' className='text-link'>Conhecer o Instituto <span>↗</span></Link>
        </div>
      </section>
      <section className='final-cta' id='contato'>
        <p className='section-label'>COMECE PELO QUE FAZ SENTIDO PARA VOCÊ</p>
        <h2 data-reveal>Seu cuidado pode<br />começar aqui.</h2>
        <p>Escolha uma experiência de cuidado que acompanhe a sua rotina.</p>
        <Link href='#pilates' className='button button-light'>Conhecer o Pilates <span>↗</span></Link>
      </section>
    </SiteShell>
  );
}
