import Image from 'next/image';

const founders = [
  'Monique Marsalia Araujo',
  'Lucas Marsalia Araujo',
] as const;

export function FounderStory() {
  return (
    <section className='founder-story' id='proposito' aria-labelledby='founder-story-title'>
      <div className='founder-story-inner'>
        <div className='founder-portrait-column' data-reveal>
          <div className='founder-portrait-frame'>
            <Image
              src='/images/monique-marsalia.png'
              alt='Monique Marsalia Araujo, sócia-fundadora do Instituto Marsalia'
              fill
              priority
              sizes='(max-width: 900px) 92vw, 44vw'
              className='founder-portrait'
              quality={90}
            />
            <span className='founder-portrait-index' aria-hidden='true'>01 / 02</span>
          </div>

          <div className='founder-caption'>
            <span>Retrato</span>
            <strong>Monique Marsalia Araujo</strong>
          </div>
        </div>

        <div className='founder-copy'>
          <div className='founder-intro' data-reveal data-delay='0.12'>
            <p className='founder-eyebrow'>À FRENTE DO INSTITUTO</p>
            <h2 id='founder-story-title'>
              Um sobrenome<br />
              <em>transformado em propósito.</em>
            </h2>
          </div>

          <div className='founder-details' data-reveal data-delay='0.18'>
            <div className='founder-names' aria-label='Sócios-fundadores'>
            <span>SÓCIOS-FUNDADORES</span>
            {founders.map((founder) => <strong key={founder}>{founder}</strong>)}
            </div>

            <div className='founder-narrative'>
              <p>
                O Instituto Marsalia nasceu de uma convicção compartilhada pelos irmãos
                Monique e Lucas: elevar a experiência em saúde e bem-estar por meio da
                excelência profissional, do cuidado individualizado e de uma estrutura
                pensada em cada detalhe.
              </p>
              <p>
                Para eles, excelência não se limita ao resultado. Ela começa muito antes —
                no ambiente, na escolha dos profissionais, na qualidade do atendimento e,
                sobretudo, na atenção dedicada a cada pessoa desde o primeiro contato.
              </p>
            </div>

            <blockquote className='founder-manifesto'>
              <span>Marsalia é a nossa assinatura.</span>
              <p>
                Carregar o nosso sobrenome é assumir, todos os dias, a responsabilidade
                pelo padrão que escolhemos estabelecer.
              </p>
            </blockquote>

            <p className='founder-closing'>
              Em Governador Lindenberg, esse propósito se traduz em uma nova forma de
              vivenciar o cuidado: mais criteriosa, próxima e elevada em cada escolha.
            </p>

            <div className='founder-signature'>
              <p>O extraordinário não está no excesso.<br />Está em escolhas impecáveis.</p>
              <span>INSTITUTO MARSALIA · O ESSENCIAL, ELEVADO.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
