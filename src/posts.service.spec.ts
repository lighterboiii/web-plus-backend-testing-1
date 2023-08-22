import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    expect(postsService.find('1')).toHaveProperty(
      'text', 'Some pre-existing post'
    );
  });

  it('should find a post', () => {
    const existingPost = postsService.find('1');

    expect(existingPost).toEqual({
      id: '1',
      text: 'Some pre-existing post',
      date: expect.any(String),
    });
  });
});