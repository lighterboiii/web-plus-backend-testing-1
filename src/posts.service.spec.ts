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
    const initialCount = postsService['posts'].length;

    const newPost = postsService.create({ text: 'This is a... Toyota' });

    expect(postsService['posts']).toHaveLength(initialCount + 1);
    expect(newPost).toMatchObject({
      id: '2',
      text: expect.any(String),
      date: expect.any(String),
    })
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