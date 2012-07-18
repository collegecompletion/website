  <?php roots_footer_before(); ?>
<div id="subfooter_container">
	<div id="subfooter">
		<?php dynamic_sidebar('roots-footer'); ?>
	</div>
</div> 
    <footer id="content-info" class="<?php global $roots_options; echo $roots_options['container_class']; ?>" role="contentinfo">  
	<?php roots_footer_inside(); ?>
		<div class="container">
			<div id="nav-main-wrapper">
		        <nav id="footer_menu_container" role="navigation">
					<ul id="footer_menu" class="menu">
						<li class="first">
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/college-stats/">Browse the data</a>
						</li>
						<li>
							<a href="/category/discussion/">Join the discussion</a>
						</li>
						<li>
							<a href="/news-resources/">News &amp; resources</a>
						</li>
						<li>
							<a href="/about/">About this project</a>
						</li>
					</ul>

		        </nav>
		       
				<div class="visit">
					<a href="http://chronicle.com" target="external" class="visit_link">chronicle.com	</a>		
					<img class="chronitron" src="<?php echo get_stylesheet_directory_uri(); ?>/imgassets/footer_chronicle.png">
				</div>
						    
				
			</div>
			

		</div>
    </footer>
    <?php roots_footer_after(); ?>
  </div><!-- /#wrap -->

<style type="text/css">

/* DISQUS - SITEWIDE HEADER */
#nav-main-discussion { font-family:arial; }
#nav-main-discussion span.discussion-icon { background:url("imgassets/icons.png") no-repeat scroll 0 -241px transparent;}
#nav-main-discussion a { text-decoration:none; font-weight:bold; }

</style>


<?php//wp_footer(); ?>
<?php //roots_footer(); ?>

  <!--[if lt IE 7]>
    <script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->


<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28392979-3']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>


</body>
</html>

