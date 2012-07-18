<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" <?php language_attributes(); ?>> <![endif]-->
<!--[if gt IE 8]> <html class="ie9plus" <?php language_attributes(); ?>> <![endif]-->
<head>
  <meta charset="utf-8">
  <meta property="og:image" content="/wp-content/themes/gates-Microciste/imgassets/link_thumb.jpg"/>
  <link type="text/plain" rel="author" href="http://collegecompletion.chronicle.com/humans.txt" />
  <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>

  <!-- <meta name="viewport" content="width=device-width"> -->

  <?php roots_stylesheets(); ?>

	
  	<script>window.jQuery || document.write('<script src="<?php echo get_template_directory_uri(); ?>/js/libs/jquery-1.7.1.min.js"><\/script>')</script>
	<!--[if !IE]><!-->
		<script src="<?php echo get_stylesheet_directory_uri(); ?>/interactive/js/d3.v2.min.js"></script>
	 <!--<![endif]-->
	<!--[if gt IE 8]>
		<script src="<?php echo get_stylesheet_directory_uri(); ?>/interactive/js/d3.v2.min.js"></script>
	<![endif]-->
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/interactive/js/sitewide.js"></script>


  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> Feed" href="<?php echo home_url(); ?>/feed/">
  <link href='http://fonts.googleapis.com/css?family=Crete+Round' rel='stylesheet' type='text/css'>

  <?php wp_head(); ?>
  <?php roots_head(); ?>

  <?php //include "interactive/everypage_header_includes.html"; ?>
  <?php //include "interactive/searchbar_header_includes.html"; ?>
  <script defer type="text/javascript">
		<?php
		//is disqus-sync enabled?
		if (function_exists('dsq_ajax_callback'))
		{
		?>
		  function ajaxDisqusRequest(loc, params) {
			var data = {
				  action: 'dsq_ajax',
				  location: loc
			  };
	  
			  for (var x in params) {
				data[x] = params[x];
			  }
	  
			  var ajaxurl = '<?php echo get_option('siteurl') . '/wp-admin/admin-ajax.php'; ?>';
  
			  // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
			  jQuery.post(ajaxurl, data, function(response) {
				  processResponse(response);
			  });
		  }
  
		  function processResponse(response) {
			var res = jQuery.parseJSON(response);
	
		   if (typeof res.html.replace == 'function' && res !== -1) { 
				$(res.id).html(res.html.replace("\\'", "'"));
		   }
		  }

		  jQuery(document).ready(function($) {
			ajaxDisqusRequest('header');
			ajaxDisqusRequest('subfooter');
		  }); 
		<?php
		}

		//resetDisqus is called in non php file so this needs to stay but just returns true when disqus is disabled.
		?>

		  function resetDisqus(inst_id, inst_name, inst_city, inst_state) {
		<?php
		//is disqus-sync enabled?
		if (function_exists('dsqSync_getDisqusCategoryIdByTitle'))
		{
		?>
			  var slugify = function (str) {
				return str.toLowerCase().replace(/[^a-z0-9 ]/gi, '').replace(/ /g, '-');
			  }
	  
			  var inst_slug = slugify(inst_name);
	  
			  var loc = loc_title = '';
			  if (inst_city != undefined && inst_city.length > 0 && inst_state != undefined && inst_state.length > 0) {
				loc = '-' + slugify(inst_city) + '-' + slugify(inst_state)
				loc_title = ' ('+inst_city+', '+inst_state+')'
			  }
	
			  var identifier = '<?php echo get_option('siteurl'); ?>/institution/'+inst_id;
			  var url = '<?php echo get_option('siteurl'); ?>/2012/'+inst_slug+loc+"?id="+inst_id;
			  var title = instElements.general.chronname+loc_title;
	
			  var disqus_developer = 1,
			  disqus_title = instElements.general.chronname+loc_title,
			  disqus_url = '<?php echo get_option('siteurl'); ?>/2012/'+inst_slug+loc+"?id="+inst_id,
			  disqus_identifier = '<?php echo get_option('siteurl'); ?>/institution/'+inst_id,
			  disqus_category_id = '<?php echo dsqSync_getDisqusCategoryIdByTitle("schools") ?>';
	
			  	//if container is empty disqus has not been initialized
				if (typeof DISQUS == 'undefined') {
					jQuery('#disqus_thread').html('');
			
					var dsq_p = document.createElement('script');
					dsq_p.type = 'text/javascript';
					var params = 'var disqus_shortname = "<?php echo DISQUS_FORUM; ?>";';
					params += 'var disqus_developer = 1;';
					params += 'var disqus_title = "'+title+'";';
					params += 'var disqus_url = "'+url+'";';
					params += 'var disqus_identifier = "'+identifier+'";';
					params += "var disqus_category_id = \'<?php echo dsqSync_getDisqusCategoryIdByTitle("schools"); ?>\';";
					dsq_p.text = params;
					(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq_p);

					var dsq = document.createElement('script');
					dsq.type = 'text/javascript';
					dsq.async = true;
					dsq.src = 'http://<?php echo DISQUS_FORUM; ?>.disqus.com/embed.js?pname=wordpress&pver=<?php echo DISQUS_VERSION; ?>';
					(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
				} else { // Disqus has been initialized, so we just need to reset with new url/identifier
					DISQUS.reset({
						reload: true,
						config: function () {            
							this.page.identifier = disqus_identifier;
							this.page.url = disqus_url;
							this.page.title = disqus_title;
						}
					});
				}
	  
			  $('#disqus_thread').show();
		<?php
		}
		else echo 'return true;';
		?>
		  }
	</script>
</head>

<body <?php body_class(roots_body_class()); ?>>
  <?php roots_wrap_before(); ?>

  <div id="wrap" class="container" role="document">

	<div id="site_header_container">
	<div id="site_header">
		
		<div id="header_masthead">
			<div id="header_logo">
				<a href="http://chronicle.com" class="chronicle" target="external"><span class="printlogo">The Chronicle of Higher Education</span></a>
				<a href="/" class="logotype"><span class="printlogo">College Completion</span></a>
			</div>
			<div id="header_social">
				Share this project <a href="http://twitter.com/?status=4.3-mil freshmen started college in fall '04. Look at their %23collegecompletion rates across institutions and states: http://chroni.cl/w1k9lU " target="external" class="sharing twitter"></a>
				<a href="http://facebook.com/sharer.php?s=100&p[title]=College Completion by The Chronicle&p[summary]=View graduation rate details for thousands of institutions and all 50 states at College Completion from the Chronicle.&p[url]=http://collegecompletion.chronicle.com&p[images][0]=http://collegecompletion.chronicle.com/wp-content/themes/gates-Microsite/imgassets/link_thumb.jpg" target="external" class="sharing facebook"></a>
				<a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A//collegecompletion.chronicle.com&title=College Completion by The Chronicle&summary=View graduation rate details for thousands of institutions and all 50 states at College Completion from the Chronicle.&source=chronicle.com" target="external" class="sharing linkedin"></a>
			</div>
			<div id="header_tagline">
				<!-- <a href="/about/" class="tagline_text"></a> --><span class="tagline_text">Who graduates from college, who doesn&rsquo;t, and why it matters.</span> <!-- <a href="/about/">About this project</a> -->
			</div>
		</div>
		
		<table id="header_menu">
			<tbody>
				<tr>
					<td class="menu_option search_option">
						<h4><a href="#" id="find_college_link">Find a college or state</a></h4>
						<div id="searchbar" class="search">
							<form id="search_form">
								<input id="search_text" value="Loading search..." /> 
							</form>
						</div>
					</td>
					<td class="menu_option browse_option">
						<h4><a href="/college-stats/">Browse the data</a></h4>
						<div class="browse_buttons">
							<a href="/state/#state=ny&sector=public_four" class="btn state_btn loading" id="user_location"><span class="label"><span class="icon">&nbsp;</span></span></a><a href="/college-stats/" class="btn us_btn"><span class="icon">Overview</span></a><a href="/table/" class="btn table_btn"><span class="icon">Table</span></a>
						</div>
					</td>
					<td class="menu_option discuss_option">
						<h4><a href="/category/discussion/">Join the discussion</a></h4>
					</td>
					<td class="menu_option news_option">
						<h4><a href="/news-resources/">News &amp; resources</a></h4>
					</td>
					<td class="menu_option about_option">
						<h4><a href="/about/">About this project</a></h4>
					</td>
				</tr>
			</tbody>
		</table>

		
	</div>
	</div>

  <?php roots_header_after(); ?>














