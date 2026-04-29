function BlogList() {
  const blogs = [
    {
      title: 'System thinking for engineers',
      href: 'https://shrinidhibhat.substack.com/'
    },
    {
      title: 'Designing resilient real-time systems',
      href: 'https://shrinidhibhat.substack.com/'
    },
    {
      title: 'Mobile architecture with Flutter',
      href: 'https://shrinidhibhat.substack.com/'
    }
  ];

  return (
    <section className="blog-section glass-panel">
      <div className="section-header">
        <h2>Blogs</h2>
        <p>Latest engineering reflections and system design entries.</p>
      </div>
      <div className="blog-list">
        {blogs.map((post) => (
          <a key={post.title} href={post.href} target="_blank" rel="noreferrer" className="blog-card">
            <h3>{post.title}</h3>
            <p>Read the full post on Substack.</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
