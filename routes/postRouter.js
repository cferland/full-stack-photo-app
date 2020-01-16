const { Router } = require('express');
const postRouter = Router();
const { Post } = require('../models.js')
const { restrict } = require('../services/auth')

postRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (e) {
      next(e)
    }
  })
  .post(restrict, async (req, res, next) => {
    try {
      const post = await Post.create({
        ...req.body,
        userId: res.locals.user.id
      });
      res.json(post);
    } catch (e) {
      next(e)
    }
  })

postRouter.route('/:id')
  .get(async (req, res, next) => {
    try {
      const post = await Post.findByPk(req.params.id);
      res.json(post);
    } catch (e) {
      next(e)
    }
  })

  .put(restrict, async (req, res, next) => {
    try {
      const post = await Post.findByPk(req.params.id);
      await post.update(req.body)
      res.json(post)
    } catch (e) {
      next(e)
    }
  })

  .delete(restrict, async (req, res, next) => {
    try {
      const post = await Post.destroy({ where: { id: req.params.id } })
      res.json(post)
    } catch (e) {
      next(e)
    }
  })

module.exports = postRouter;