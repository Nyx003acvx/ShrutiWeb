const publications = [
  { title: 'Publication title one', date: '2026', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A concise overview of the paper, its central question, and the contribution it makes.', href: '#' },
  { title: 'Publication title two', date: '2025', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A short summary of the research approach, key themes, and findings.', href: '#' },
  { title: 'Publication title three', date: '2024', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', href: '#' },
]

export function Experience() {
  return <section id="experience" className="experience experience-editorial section-pad publications-section" aria-labelledby="experience-title">
    <div className="experience-intro">
      <span className="eyebrow">(05) Research & Publications</span>
      <div><h2 id="experience-title">Ideas put<br /><em>into words.</em></h2><p className="publications-intro-copy">Selected writing, research, and work in progress.</p></div>
    </div>
    <div className="publications-table-wrap">
      <table className="publications-table">
        <thead><tr><th scope="col">Title</th><th scope="col">Description</th><th scope="col">Publication date</th><th scope="col">Paper</th></tr></thead>
        <tbody>{publications.map((item, index) => <tr key={item.title}>
          <th scope="row"><span className="publication-index">0{index + 1}</span>{item.title}</th>
          <td>{item.description}</td>
          <td><time>{item.date}</time></td>
          <td><a href={item.href} aria-label={`Read ${item.title}`}>Read paper ↗</a></td>
        </tr>)}</tbody>
      </table>
    </div>
  </section>
}