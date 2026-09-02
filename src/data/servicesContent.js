/**
 * Static content for service pages rendered via DynamicService (/service/:slug).
 * 
 * NOTE: Pages that have dedicated components (VisaSchengen, Residency, etc.)
 * should NOT be duplicated here. This file is ONLY for slugs that don't have
 * a dedicated page file and are served via pages/service/DynamicService.jsx.
 *
 * Current dedicated pages (do NOT add their content here):
 *   /visa/russia         → pages/service/VisaRussia
 *   /residency/armenia   → pages/service/Residency
 *   /student-visa/armenia, /student-visa/russia → pages/service/StudentVisa*
 *   /services/company-registration → pages/service/CompanyReg
 *   /services/student-admission    → pages/service/StudentAdmission
 *   /travel/*            → pages/travel/* or pages/service/*
 *
 * To add a new service page without creating a dedicated file,
 * add its slug here and it will be auto-rendered by DynamicService.
 */

export const servicesContent = {
  // Add new dynamic service pages here as needed.
  // Example:
  // 'new-service-slug': {
  //   titleFa: '...', titleEn: '...', titleRu: '...',
  //   subtitleFa: '...', subtitleEn: '...', subtitleRu: '...',
  //   heroImage: 'https://...',
  //   serviceType: 'some-type',
  //   blocks: {
  //     fa: [{ title: '...', content: '...' }],
  //     en: [{ title: '...', content: '...' }],
  //     ru: [{ title: '...', content: '...' }],
  //   },
  // },
};

/**
 * Get service content by slug. Returns null if not found.
 * @param {string} slug
 * @returns {object|null}
 */
export function getServiceContent(slug) {
  return servicesContent[slug] || null;
}