<?php get_header(); ?>
  <?php roots_content_before(); ?>
    <div id="content" class="<?php echo $roots_options['container_class']; ?>">
    <?php roots_main_before(); ?>
      <div id="main" class="<?php echo $roots_options['main_class']; ?>" role="main">
        <div class="container">
          <?php roots_loop_before(); ?>
          <?php get_template_part('loop', 'single'); ?>
          <?php roots_loop_after(); ?>
        </div>
      </div><!-- /#main -->
    <?php roots_main_after(); ?>
    <?php roots_sidebar_before(); ?>
      <aside id="sidebar" class="<?php echo $roots_options['sidebar_class']; ?>" role="complementary" style="display:block; width:17%;">
      <?php roots_sidebar_inside_before(); ?>
        <div class="container">
          <?php //get_sidebar(); ?>
        </div>
      <?php roots_sidebar_inside_after(); ?>
      </aside><!-- /#sidebar -->
    <?php roots_sidebar_after(); ?>
    </div><!-- /#content -->
  <?php roots_content_after(); ?>
    <div id="disqus-sidebar-content">
<?php
 // echo getDisqusPostSideBar($post->post_title);
?>

<div id="popularthreads" class="dsq-widget">
<h2 class="dsq-widget-title">Popular Discussions</h2>
<script type="text/javascript" src="<?php echo $disqusSite; ?>.disqus.com/popular_threads_widget.js?num_items=5"></script>
</div>
<!-- <a href="http://disqus.com/">Powered by Disqus</a> -->
    </div>  

<script type="text/javascript">
  $('aside .container').html($('#disqus-sidebar-content').html());
  $('#disqus-sidebar-content').remove();
</script>  
<?php get_footer();?>
