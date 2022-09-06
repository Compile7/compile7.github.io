---
title: "A Guide to Setup Multi-Author Blog using Gatsby"
date: "2020-09-21"
category: "LazyGrid"
tags:
  - "gatsby"
  - "yaml"
  - "multi-author"
description: "If you have followed the gatsby-starter-blog and configured your first blog site using gatsby, and you might get a requirement for adding the multi-author support then checkout this post."
author: "Mohammed Modi"
---

If you have followed the [gatsby-starter-blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog/) and configured your first blog site using gatsby, and you might get a requirement for adding the multi-author support due to one of the following reasons.
- Your blog is popular and you want to welcome the external contributors for your blog
- You want to set up a blog for your company where there will be multiple writers for your companies blog and you want to showcase all of the blogs in a proper unified manner.

If you are looking for suck kind of upgrade then this post is for you. Follow with me in this blog and we will setup the multi-author blog in no time.

### Prerequisite
- Basic understanding for React.
- Inital blog setup using [gatsby-started-blog](https://github.com/gatsbyjs/gatsby-starter-blog).

### First thing first

We will use the `yaml` file to store the author information, so let's create `author.yaml` file inside the `content` folder.

author.yaml
```yaml
- id: John Doe
  bio: "I am a good blogger, programmer and enthusiast learner"
  image: "assets/authors/jhon-doe.jpg"
```

This is an example of one author object, let me go through each field in this object
- **id:** This will be mapped with the blog file to identify the author information of that particular blog.
- **bio:** A short intro about of the author
- **image:** It will be a relative path starting from the content folder.

> Note: You can add more fields in the author object which can be used later as per the requirements such as social profiles like Twitter, LinkedIn, StackOverflow etc.

### Update Gatsby Config

After creating the author.yaml file you need to perform two changes in the `gatsby-config.js` files.

#### 1. Create Mapping
Mapping of `author.yaml` file needs to be done with the **frontmatter**, so let's create one frontmatter property called `author` and map it with our `author.yaml` file.

```js
plugins: [
  ...
],
mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
},
```

#### 2. Update the plugins

Now you might wonder how the `author.yaml` file can be picked by the Gatsby configuration and map it with the frontmatter. So in this step, we will add the plugin called `gatsby-transformer-yaml` which will be used to perform that task.

With that, we also need to tell our `gatsby-source-filesystem` to pick the `author.yaml` file for querying in the gatsby site.

Hence the plugins will be now updated as 

```js
plugins: [
 {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
 },
 ...
 `gatsby-transformer-yaml`,
],
mappings: {
    ...
}
```

> Note: In the `gatsby-source-filesystem` the `path` fields is updated as `content` instead of `content/blog` and `content/assets`. Hence all the files are folder inside the content folder can be queried now.

### Updating the Metatags of Markdown File

As discussed in the First Step, in the `author.yaml` file we will identify each author with its **id**, so we will add the same id in our `content/blog/<blogName>/index.md` file.

For Eg:
```
---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
id: John Doe     // It should be same as author.yaml file
---
```

### Let's Test it

Now once done with the above steps, we will run our gatsby app in the development mode using `gatsby develop` or `npm run develop` command. And once you see the message **success Building development bundle** we will run http://localhost:8000/___graphql to open the graphql playground of our application.

```graphql
query MyQuery {
  authorYaml {
    id
    bio
    image {
      relativePath
    }
  }
}
```

Once you run this Query you will get the below output.

```json
{
  "data": {
    "authorYaml": {
      "id": "John Doe",
      "bio": "I am a good blogger, programmer and enthusiast learner",
      "image": {
        "relativePath": "assets/authors/jhon-doe.jpg"
      }
    }
  },
```

Now to get the author information in your blog page you need to use the `author` frontmatter which we have created in the above step. Let's update the query in `src/templates/blog-post.js` like below

```graphql
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author {           
          id
          bio
          image {
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
```

Now, you can get author information as a JSON object in `post.frontmatter.author`.

### Enhancement
After this step we can create a seprate author page where we can list down the blog of that particular author based on the `authorId`, I will cover this in my next blog, stay tuned for the update.

### Conclusion
Hence using the `author.yaml` file we have create a multi-author blog which can will be more cleaner. Please feel free to mention any suggestions aur queries in the comments below.





 
