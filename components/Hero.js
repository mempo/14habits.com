import React from 'react';
import i18n from '../lib/i18n';

class Hero extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    let convertKit = {
      form: '1508065',
      uid: '8c01414042'
    };

    if (this.props.locale === 'pt-BR') {
      convertKit = {
        form: '1508165',
        uid: 'b73173af97'
      };
    }

    return <div className="mx-auto max-w-screen-xl px-4 mt-7 mb-8 sm:mt-11 sm:mb-12 sm:px-6 md:mt-19 md:mb-20 xl:mt-23 xl:mb-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="md:max-w-1xl md:mx-auto lg:col-span-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
            {i18n.t('comingSoon')}
          </div>
          <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            {i18n.t('titleFirstPart')}&nbsp;
            <br className="hidden md:inline" />
            <span className="text-indigo-600">{i18n.t('titleSecondPart')}</span>
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {i18n.t('headerFirstParagraph')}
          </p>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            {i18n.t('headerSecondParagraph')}
          </p>
          <div className="mt-5 sm:max-w-lg lg:mx-0">
            <p className="text-base font-medium text-gray-900">
              {i18n.t('notifyCta')}
            </p>

            <form action={`https://app.convertkit.com/forms/${convertKit.form}/subscriptions`} data-sv-form={convertKit.form} data-uid={convertKit.uid} data-format="inline" data-version="5">
              <ul data-element="errors"></ul>
              <div data-element="fields">
                <div className="mt-3 sm:flex">
                  <input type="email" name="email_address" placeholder={i18n.t('enterEmail')} required className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1" />
                  <button data-element="submit" className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:shadow-outline active:bg-indigo-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                    {i18n.t('notifyMe')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
          <img src={i18n.t('bookCover')} alt="Book cover" />
        </div>
      </div>
    </div>
  }
}

export default Hero;