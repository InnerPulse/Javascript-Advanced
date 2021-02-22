class Story {
  _comments;
  _likes;

  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (!this._likes.length) {
      return `${this.title} has 0 likes`;
    }

    if (this._likes.length == 1) {
      return `${this._likes[0].username} likes this story!`;
    }
    
    return `${this._likes[0].username} and ${this._likes.length - 1} others like this story!`;
  }

  like(username) {
    const existing = this._likes.find((u) => u.username === username);

    if (existing) {
      throw new Error(`You can't like the same story twice!`);
    }

    if (username === this.creator) {
      throw new Error(`You can't like your own story!`);
    }

    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    const existing = this._likes.find((l) => l.username === username);

    if (!existing) {
      throw new Error(`You can't dislike this story!`);
    }

    this._likes.splice(this._likes.indexOf(existing), 1)
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    const existing = this._comments.find((c) => c.id === id);

    if (!existing || !id) {
      this._comments.push({ id: this._comments.length + 1, username, content, replies: [] });
      return `${username} commented on ${this.title}`
    }

    const replyId = `${id}.${existing.replies.length + 1}`
    existing.replies.push({ id: replyId, username, content })
    return `You replied successfully`;
  }

  toString(sortingType) {
    const sortingOptions = {
      'asc': (a, b) => a.id - b.id,
      'desc': (a, b) => b.id - a.id,
      'username': (a, b) => a.username.localeCompare(b.username)
  }

    const result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, `Comments:`]
    this._comments.sort(sortingOptions[sortingType]).forEach(c => {
      result.push(`-- ${c.id}. ${c.username}: ${c.content}`)
      c.replies.sort(sorting[sortingType]).forEach(r => {
          result.push(`--- ${r.id}. ${r.username}: ${r.content}`)
      })
  });

  return result.join('\n')
  }
}
