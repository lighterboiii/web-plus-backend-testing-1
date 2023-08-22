import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  let preExistingPost: Post

  beforeEach(async () => {
    postsService = new PostsService();

    preExistingPost = postsService.create({ text: 'Some pre-existing post' });
  });

  it('should find a post', () => {
    const post = postsService.find(preExistingPost.id)
    expect(post?.text).toEqual(preExistingPost.text)
  });

  it('should add a new post', () => {
    const post: Omit<Post, 'id' | 'date'> = {
      text: 'Mocked post',
    };
    const createdPost = postsService.create(post)
    const foundPost = postsService.find(createdPost.id)
    expect(foundPost?.text).toEqual(post.text)
  });
});