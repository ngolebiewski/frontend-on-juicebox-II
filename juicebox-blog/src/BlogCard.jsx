import Card from 'react-bootstrap/Card';

const BlogCard = ({ allPosts }) => {
  return (
    allPosts.map((blogPost) => {
      const { id, title, content } = blogPost;
      return (
        <Card key={id} border="primary" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {content}
            </Card.Text>
            <Card.Link href="#">Details</Card.Link>
          </Card.Body>
        </Card>
      )
    }

    )

  );
}

export default BlogCard;