import React from 'react';
import i18n from '../lib/i18n';

class Interviews extends React.Component {
  state = {
    interviewees: [
      {
        id: 'addy',
        name: 'Addy Osmani',
        company: 'Google',
        companyUrl: 'https://google.com',
        github: 'addyosmani',
        twitter: 'addyosmani',
        linkedin: 'osmani',
      },
      {
        id: 'berg',
        name: 'Berg Brandt',
        company: 'Amazon',
        companyUrl: 'https://studios.amazon.com',
        github: 'bergbrandt',
        twitter: 'bergbrandt',
        linkedin: 'bergbrandt',
      },
      {
        id: 'blake',
        name: 'Blake Williams',
        company: 'GitHub',
        companyUrl: 'https://github.com',
        github: 'BlakeWilliams',
        twitter: 'blakeorwhatever',
        linkedin: 'blake-williams-2694204b',
      },
      {
        id: 'caio',
        name: 'Caio Gondim',
        company: 'New York Times',
        companyUrl: 'https://www.nytimes.com',
        github: 'caiogondim',
        twitter: 'caio_gondim',
        linkedin: 'cgondim',
      },
      {
        id: 'daniel',
        name: 'Daniel Buchner',
        company: 'Microsoft',
        companyUrl: 'https://microsoft.com',
        github: 'csuwildcat',
        twitter: 'csuwildcat',
        linkedin: 'dbuchner',
      },
      {
        id: 'fabio',
        name: 'Fabio Costa',
        company: 'GoDaddy',
        companyUrl: 'https://godaddy.com',
        github: 'fabiomcosta',
        twitter: 'fabiomiranda',
        linkedin: 'fabiomirandacosta',
      },
      {
        id: 'fernando',
        name: 'Fernando Tadashi',
        company: 'Adobe',
        companyUrl: 'https://adobe.com',
        github: 'ftadashi',
        linkedin: 'ftadashi',
      },
      {
        id: 'lais',
        name: 'Lais Andrade',
        company: 'Google',
        companyUrl: 'https://google.com',
        github: 'laissandrade',
        linkedin: 'lais-andrade-55981930',
      },
      {
        id: 'loiane',
        name: 'Loiane Groner',
        company: 'Citibank',
        companyUrl: 'https://citibank.com',
        github: 'loiane',
        twitter: 'loiane',
        linkedin: 'loiane',
      },
      {
        id: 'luciano',
        name: 'Luciano Sousa',
        company: 'Shopify',
        companyUrl: 'https://www.shopify.com',
        github: 'lucianosousa',
        twitter: 'lucianosousa',
        linkedin: 'lucianosousa',
      },
      {
        id: 'manu',
        name: 'Manuel de la Peña',
        company: 'Elastic',
        companyUrl: 'https://www.elastic.co',
        github: 'mdelapenya',
        twitter: 'mdelapenya',
        linkedin: 'mdelapenya',
      },
      {
        id: 'michael',
        name: 'Michael Lancaster',
        company: 'BlackBerry',
        companyUrl: 'https://blackberry.com',
        github: 'weblancaster',
        twitter: 'weblancaster',
        linkedin: 'michaellancaster1',
      },
      {
        id: 'netto',
        name: 'Netto Farah',
        company: 'Segment',
        companyUrl: 'https://segment.com',
        github: 'nettofarah',
        twitter: 'nettofarah',
        linkedin: 'netto-farah-7433b328',
      },
      {
        id: 'silvio',
        name: 'Silvio Gustavo',
        company: 'Spotify',
        companyUrl: 'https://spotify.com',
        github: 'sgosantos',
        twitter: 'sgosantos',
        linkedin: 'sgosantos',
      },
    ]
  };

  renderInterviewItem(interviewee) {
    return <div key={interviewee.id} className="flex-none sm:flex mb-12">
      <img className="w-40 h-40 rounded-full mr-8" src={`/static/img/avatar-${interviewee.id}.jpeg`} alt={interviewee.name} />
      <div className="text-sm">
        <p className="text-2xl text-gray-900">{interviewee.name}</p>
        <p className="text-xl text-indigo-700 hover:text-indigo-500">
          <a href={interviewee.companyUrl} target="_blank">{interviewee.company}</a>
        </p>
        <p className="text-base text-gray-600 mb-1">{i18n.t(`interviews.${interviewee.id}.bio`)}</p>
        <p className="text-sm italic text-gray-500">{i18n.t(`interviews.${interviewee.id}.location`)}</p>
        <div className="flex flex-row my-2">
          {interviewee.github &&
            <a href={`https://github.com/${interviewee.github}`} target="_blank">
              <img className="w-5 h-5 mr-2" src="/static/img/logo-github.svg" alt="GitHub" />
            </a>
          }
          {interviewee.twitter &&
            <a href={`https://twitter.com/${interviewee.twitter}`} target="_blank">
              <img className="w-5 h-5 mr-2" src="/static/img/logo-twitter.svg" alt="Twitter" />
            </a>
          }
          {interviewee.linkedin &&
            <a href={`https://linkedin.com/in/${interviewee.linkedin}`} target="_blank">
              <img className="w-5 h-5 mr-2" src="/static/img/logo-linkedin.svg" alt="Linkedin" />
            </a>
          }
        </div>
      </div>
    </div>
  }

  render() {
    i18n.locale = this.props.locale;

    return <div className="bg-white">
      <div className="max-w-screen-xl mx-auto pt-16 pb-4 px-4">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
          {i18n.t('interviews.title')}
        </h2>
        <div className="mt-6 pt-10">
          {this.state.interviewees.map(interviewee => {
            return this.renderInterviewItem(interviewee);
          })}
        </div>
      </div>
    </div>
  }
}

export default Interviews;