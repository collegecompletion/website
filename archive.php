<?php get_header(); ?>
  <?php roots_content_before(); ?>
    <div id="content" class="<?php echo $roots_options['container_class']; ?>">
    <?php roots_main_before(); ?>
      <div id="main" class="main_col <?php echo $roots_options['main_class']; ?>" role="main">
        <div class="container">
          <h1>
            <?php if (is_day()) : ?>
              <?php printf(__('Daily Archives: %s', 'roots'), get_the_date()); ?>
            <?php elseif (is_month()) : ?>
              <?php printf(__('Monthly Archives: %s', 'roots'), get_the_date('F Y')); ?>
            <?php elseif (is_year()) : ?>
              <?php printf(__('Yearly Archives: %s', 'roots'), get_the_date('Y')); ?>
            <?php else : ?>
              <?php single_cat_title(); ?>
            <?php endif; ?>
          </h1>
   <!-- /*   <div id="categories">
      <?php
      $wp_category_ids = get_all_category_ids();
      foreach ($wp_category_ids as $wp_category_id)
      {
        $cat = get_category($wp_category_id);
?>
      <a href="/college-completion/category/<?php echo $cat->slug; ?>/"><?php echo $cat->name; ?></a>
      
<?php
        if ($wp_category_id != end($wp_category_ids)) echo ' | ';
      }
      ?>
      </div>     */   -->
    	<div class="discussion_topics">
          <?php roots_loop_before(); ?>
          <?php get_template_part('loop', 'category'); ?>
          <?php roots_loop_after(); ?>
		</div>
      </div>

      </div><!-- /#main -->

    <?php roots_main_after(); ?>
    <?php roots_sidebar_before(); ?>
      <aside id="sidebar" class="<?php echo $roots_options['sidebar_class']; ?>" role="complementary">
      <?php roots_sidebar_inside_before(); ?>
        <div class="container">
          <?php get_sidebar(); ?>
        </div>
      <?php roots_sidebar_inside_after(); ?>
      </aside><!-- /#sidebar -->
    <?php roots_sidebar_after(); ?>
    </div><!-- /#content -->
  <?php roots_content_after(); ?>
  <div id="disqus-sidebar-content">
<?php
//$url = preg_replace('%/$%', '', $_SERVER['REQUEST_URI']);
//$category_name = end(explode('/', $url));
//echo getDisqusDiscussionSideBar($category_name);
?>
<div id="recentcomments" class="dsq-widget">
<h2 class="dsq-widget-title">Recent Comments</h2>
<script type="text/javascript" src="http://<?php echo $disqusSite ?>.disqus.com/recent_comments_widget.js?num_items=5&hide_avatars=1&avatar_size=24&excerpt_length=110"></script></div>

    </div>  
<script type="text/javascript">
$('aside .container').html($('#disqus-sidebar-content').html());
$('#disqus-sidebar-content').remove();
</script>  
<?php get_footer(); ?>
<?php echo $_SERVER['HTTP_HOST'] ."(" .$disqusSite .")";    
    

