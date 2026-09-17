const founders = [
  'Monique Marsalia Araujo',
  'Lucas Marsalia Araujo',
] as const;

export function FounderStory() {
  return (
    <section className='founder-story' id='proposito' aria-labelledby='founder-story-title'>
      <div className='founder-story-inner'>
        <div className='founder-copy'>
          <div className='founder-intro' data-reveal>
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
                Monique e Lucas: elevar o padrão de saúde e bem-estar por meio da
                excelência profissional, de uma escuta genuína e de uma estrutura
                pensada em cada detalhe.
              </p>
              <p>
                Para eles, excelência não se limita ao resultado. Ela começa muito antes —
                no ambiente, na escolha dos profissionais, na qualidade do atendimento e
                na presença desde o primeiro contato.
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
              viver a saúde: com critério, proximidade e qualidade em cada escolha.
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