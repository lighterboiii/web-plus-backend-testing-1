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
    // arrange
    const initialCount = postsService['posts'].length;
    // act
    const newPost = postsService.create({ text: 'This is a... Toyota' })
    // assert
    expect(postsService['posts']).toHaveLength(initialCount + 1);
    expect(newPost).toMatchObject({
      id: '2',
      text: expect.any(String),
      date: expect.any(String),
    })
  });

  it('should find a post', () => {
    // arrange 
    const existingPost = postsService['posts'][0];
    // act
    const findPost = postsService.find(existingPost.text);
    // assert
    expect(findPost).toEqual(findPost);
  });
});