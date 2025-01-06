<template>
  <main>
    <h1>blog <span>post</span></h1>
    <div class="bloglist">
      <a
        href="https://emdesinsight.hashnode.dev/add-depth-and-motion-to-your-design-with-css-blur-effects"
        ><div class="blog">
          <img src="../assets/images/image.png" alt="blog" />
          <div class="blog-details">
            <h3>Add Depth and Motion to Your Design with CSS Blur Effects</h3>
            <span>Mar 26, 2023 | Hashnode</span>
            <p>
              Blur is a popular visual effect in web design that can help draw
              attention to certain elements or create a sense of depth and
              motion.
            </p>
          </div>
        </div></a
      >

      <a href="https://emdesinsight.hashnode.dev/know-your-path-directory"
        ><div class="blog">
          <img src="../assets/images/image.png" alt="blog" />
          <div class="blog-details">
            <h3>
              Using File Paths in HTML and CSS: A Guide to Linking External
              Resources
            </h3>
            <span>Mar 26, 2023 | Hashnode</span>
            <p>
              A file path directory refers to the location of a file or folder
              within a file system. It is the sequence of folders that must be
              navigated to find the file or folder.
            </p>
          </div>
        </div></a
      >

      <a
        href="https://emdesinsight.hashnode.dev/mastering-responsive-images-tips-for-optimal-display-on-any-device"
        ><div class="blog">
          <img src="../assets/images/image.png" alt="blog" />
          <div class="blog-details">
            <h3>
              Mastering Responsive Images: Tips for Optimal Display on Any
              Device
            </h3>
            <span>Feb 23, 2023 | Hashnode</span>
            <p>
              Responsive design has developed into a crucial component of
              contemporary web development as more users reach websites on a
              variety of devices. Making sure that images appear great on all
              screen sizes is one of the biggest challenges in responsive
              design. We'll go over some advice for making your images
              responsive design-friendly in this article.
            </p>
          </div>
        </div></a
      >
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 50px 0;
  justify-content: center;
}

h1 span {
  font: inherit;
  color: var(--vt-yellow);
}

h1 {
  text-align: center;
}

.bloglist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

.blog {
  display: flex;
  flex-direction: column;
}

a {
  display: flex;
  flex: 1 1 350px;
}

img {
  width: 100%;
}

.blog-details {
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background-color: var(--vt-grey-2);
}

h3 {
  color: var(--vt-yellow);
  height: 58px;
  overflow: hidden;
}

span {
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: var(--vt-ash);
}

p {
  height: 100px;
  overflow: hidden;
  color: #ccc;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 121.12%;
}

@media (min-width: 1024px) {
}
</style>
