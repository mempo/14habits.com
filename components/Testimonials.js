import React from 'react';
import i18n from '../lib/i18n';

class Testimonials extends React.Component {
  render() {
    i18n.locale = this.props.locale;

    return <section className="py-12 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img src="/static/img/logo-nike.svg" className="mx-auto" height="100" width="100" />
          <blockquote className="mt-8">
            <div className="max-w-6xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>&ldquo;{i18n.t('testimonial.quote')}&rdquo;</p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img className="mx-auto h-10 w-10 rounded-full" src="/static/img/avatar-zachary.jpeg" alt="Zachary Sohovich" />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base leading-6 font-medium text-gray-900">Zachary Sohovich</div>
                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base leading-6 font-medium text-gray-500">Software Engineer, Nike</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  }
}

export default Testimonials;