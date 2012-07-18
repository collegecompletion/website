<?php
/* 
functions.php

This will house the custom function for populating the gates site
*/

require_once(ABSPATH . 'disqus_config.php');

function topbar(){
	$topbar  = "<span class='tagline'><a href='http://www.chronicle.com'><img src='". get_stylesheet_directory_uri() ."/imgassets/che_logotype.png' alt='The Chronicle of Higher Education' /></a></span>";
	$topbar .= "  <span class='visitlink'><a target='_blank' href='http://chronicle.com'><img src='". get_stylesheet_directory_uri() ."/imgassets/c.png'/>visit chronicle.com</a></span>";
    $topbar .= "<div class='contentwrapper'>";	
    $topbar .= "  <div class='share_links'><span class='share_label'>share this project</span>";
	$topbar .= "    <ul>";
 	$topbar .= "      <li class='twitter'><a href='#'><img src='" . get_stylesheet_directory_uri() . "/imgassets/twitter.png'/></a></li>";
	$topbar .= "      <li class='facebook'><a href='#'><img src='". get_stylesheet_directory_uri() ."/imgassets/facebook-16x16.gif'/></a></li>";
	$topbar .= "      <li class='linkedin'><a href='#'><img src='". get_stylesheet_directory_uri() ."/imgassets/linkedin.png' width='20' height='20'/></a></li>";
    $topbar .= "    </ul>";
	$topbar .= "  </div>";
    $topbar .= "</div>";
return $topbar;
}

// init Disqus APIs
$DISQUS_API_1 = $DISQUS_API_2 = null;
if (class_exists('DisqusAPI'))
{
	$DISQUS_API_1 = new DisqusAPI(DISQUS_USER_API_KEY, DISQUS_FORUM_API_KEY);
}

if (class_exists('DisqusAPI2'))
{
	$DISQUS_API_2 = new DisqusAPI2(DISQUS_SECRET_KEY);
}

function getDisqusComments($limit = 1)
{
	global $DISQUS_API_2;
	
	//problem with Disqus API
	if (!isset($DISQUS_API_2)) return false;
	
	$params = array(
		'forum' => DISQUS_FORUM,
		'limit' => $limit
	);
	
	$posts = $DISQUS_API_2->posts->list($params);
	
	return (isset($posts)) ? $posts : false;
}

function getDisqusFrontPage()
{
	if (
		!defined('DISQUS_USER_API_KEY') ||
		!defined('DISQUS_FORUM_API_KEY') ||
		!defined('DISQUS_FORUM_ID')
	)
	{
		return false;
	}

	//most recent_thread	
	$threads = getDisqusMostRecentNonSchoolsThreads(5);
	
	//problem with Disqus
	if (!$threads || empty($threads))
	{
		return getDisqusFrontPageDefault();
	}
	
	$thread = $threads[0];
	
	try {
			$comments = getDisqusThreadComments($thread->id, 5); // DISQUS_FRONT_PAGE_COMMENT_CT);
		} 
			catch (Exception $e)
		{
			$comments = "";
		}
			


	if (!$comments || empty($comments))
	{
		return getDisqusFrontPageDefault();
	}
	
	$mrt_html = '<h3>Recent Discussion</h3>';	
	$mrt_html .= '<div class="mrt_thread"><a href="' . $thread->link . '">' . $thread->title . '</a></div>';
	
	$likes_pos = 'right';
	$balloon_arrow_pos = 'left';
	foreach ($comments as $i => $comment)
	{
		$mrt_html .= '<div class="mrt_comment">';
		$mrt_html .=   '<div class="mrt_comment_message_top"></div>';
		$mrt_html .=   '<div class="mrt_comment_message_middle">';
		
		$message = preg_replace('%(\r)?\n%', '', $comment->message);		
		
        if (strlen($message) > 140)
		{
			$message = substr($message, 0, 140)."...";
		}
		$mrt_html .= $message;
		
		$mrt_html .=   '<b></b></div>';
		$mrt_html .=     '<div class="mrt_comment_author">';
		$mrt_html .= $comment->author->display_name;
		$mrt_html .=     '</div>';
		$mrt_html .=     '<div class="mrt_comment_read_more">';
		$mrt_html .=       '<a href="' . $thread->link . '">+ Read more</a>';
		$mrt_html .=     '</div>';
		$mrt_html .=   '<div class="mrt_comment_message_bottom"></div>';
		$mrt_html .=   '<div class="mrt_comment_balloon_arrow_'.$balloon_arrow_pos.'"></div>';
		$mrt_html .=   '<div class="mrt_comment_likes mrt_likespos_'.$likes_pos.'">';
		if ($comment->likes > 1) {
		$mrt_html .=     'Liked by ' . $comment->likes;
		$mrt_html .= ($comment->likes == 1) ? ' reader' : ' readers';
		}
		$mrt_html .=   '</div>';
		$mrt_html .= '</div>';
			
		$likes_pos = ($likes_pos == 'right') ? 'left' : 'right';
		$balloon_arrow_pos = ($likes_pos == 'right') ? 'right' : 'left';
		
	}

    $mrt_html .= '<div class="mrt_comment mrt_add_your_opinion">';
	$mrt_html .=   '<div class="mrt_comment_message_top"></div>';
	$mrt_html .=   '<div class="mrt_comment_message_middle">';
	$mrt_html .=     '<a href="' . $thread->link . '">+ Add your opinion</a>';
	$mrt_html .=   '</div>';
	$mrt_html .=   '<div class="mrt_comment_message_bottom"></div>';
	$mrt_html .=   '<div class="mrt_comment_balloon_arrow_'.$balloon_arrow_pos.'"></div>';
	$mrt_html .= '</div>';
	
	return preg_replace("/'/", "\'", $mrt_html);
}

function getDisqusFrontPageDefault()
{
	return 'No comments are avaiable right now.';
}

function getDisqusForumThreads($limit = 5, $category_id = null)
{
	global $DISQUS_API_2;
	
	if (!isset($DISQUS_API_2)) return false;
	
	$params = array( 'forum' => DISQUS_FORUM, 'limit' => $limit, 'category' => $category_id );

	try { 
			$threads = $DISQUS_API_2->threads->list($params);
	    } 
			catch (Exception $e) 
		{ 
			$threads = ""; 
		} 

	return $threads;
}

/* DEPRECATED
function getDisqusForumThreadsForSidebar($post, $limit, $start = null, $category_id = null)
{
	//if is_only_general, get most recent threads
	$threads = getDisqusMostRecentNonSchoolsThreads($limit, $category_id);
		
	//make sure we're not including the current post
	$threads = duplicatePostThreadCheck($threads, $post->post_name);
	
	return $threads;
}
*/

function getDisqusHeader()
{

	//get most recent thread
	$threads = getDisqusMostRecentNonSchoolsThreads();
	$thread = $threads[0];
	
	//problem with Disqus
	if (false == $thread)
	{
		return getDisqusHeaderDefault();
	}
	
	//truncate if necessary
	$len = 35; //DISQUS_HEADER_CHAR_LEN; 
	$title = (strlen($thread->title) > $len) ? substr($thread->title, 0, $len) . '...' : $thread->title;
	
	//return html thread link
	return '<span class="discussion-icon"></span>Recent Discussion: <a href="' . $thread->link . '">' . $title . '</a>';
}

function getDisqusHeaderDefault()
{
	return '';
}

function getDisqusThreadComments($thread_id, $limit = 5, $start = 0, $include = 'approved')
{
	global $DISQUS_API_2;
	
	//problem with Disqus API
	if (!isset($DISQUS_API_2)) return false;

	$params = array(
		'forum' => DISQUS_FORUM,
		'limit' => $limit,
		'thread' => $thread_id,
	);	
	
	$comments = $DISQUS_API_2->threads->listPosts($params);
	
	return $comments;	
}

function getDisqusLastComment()
{
	global $DISQUS_API_2;
	
	//problem with Disqus API
	if (!isset($DISQUS_API_2)) return false;
	
	$posts = getDisqusComments(1);
	
	return (isset($posts[0])) ? $posts[0] : false;
}

function getDisqusLastThread()
{
	return getDisqusThread();
}


function microtime_float()
{
    list($usec, $sec) = explode(" ", microtime());
    return ((float)$usec + (float)$sec);
}


function getDisqusPostSideBar($post_title)
{
$time_start = microtime(true);

	if (empty($post_title))
	{
		return  getDisqusPostSideBarDefault();
	}
	
	//get non-schools threads, get 1 extra in case results contain the current post
	$threads = getDisqusMostRecentNonSchoolsThreads(6);
	
	//if no threads, show default
	if (empty($threads))
	{
		return  getDisqusPostSideBarDefault();
	}
	
	//see if result contain current post thread, if so remove
	$found_dup = false;
	foreach ($threads as $i => $thread)
	{
		if ($thread->title == $post_title)
		{
			$found_dup = true;
			unset($threads[$i]);
			break;
		}
	}
	
	//We did not find a duplicate, so remove that extra one we added above
	if (!$found_dup) array_pop($threads);	

$time_end = microtime_float();
$time = $time_end - $time_start;

echo "Thread retrieval in $time seconds\n";
	
	return getHtmlForSidebar($threads);
}

function getDisqusPostSideBarDefault()
{
	return '';
}

function getDisqusDiscussionSideBar($category = '')
{
$time_start = microtime(true);
echo "in getDisqusDiscussionSideBar";

	if (false == DISQUS_ENABLED) return true;
	
	$threads = array();
	
	if (strlen($category) && $category != 'colleges')
	{
		echo "category:".$category;

		$category_id = dsqSync_getDisqusCategoryIdByTitle($category);
		echo "<BR/>id= $category_id <BR/>";
		$threads = getDisqusForumThreads(6, $category_id);

	}

	if (!strlen($category) || !$category_id || empty($threads))
	{
		$threads = getDisqusMostRecentNonSchoolsThreads(6);
	}
	
	//if no threads, show default
	if (!$threads || empty($threads))
	{
		return getDisqusDiscussionSideBarDefault();
	}

$time_end = microtime_float();
$time = $time_end - $time_start;

echo "All Thread retrieval in $time seconds\n";


	return getHtmlForSidebar($threads);
}

function getDisqusDiscussionSideBarDefault()
{
	return 'There are no comments.';
}

function getHtmlForSidebar($threads = array())
{
//	echo "getDisqusDiscussionSideBar";

	global $DISQUS_API_1;
	
	$thread_html = '';
	
	if (!empty($threads) && isset($DISQUS_API_1))
	{
		$thread_html = '<div class="disqus-post-sidebar-container">';
		$thread_html .= '<div class="disqus-power">powered by <span>DISQUS</span></div>';
		$thread_html .= '<h3>Most Recent Discussion</h3>';

		//if ($_GET['debug']==1){ echo "<!--"; var_dump ($threads); echo "-->";}

		foreach($threads as $thread)
		{
			$num = $DISQUS_API_1->get_num_posts(array($thread->id));
			if ($num->{$thread->id}[0]=='0 comments') ;
			$num->{$thread->id}[0];
            $comments= ($num->{$thread->id}[0] == 1) ? '1 comment' : $num->{$thread->id}[0].' comments';
			$thread_html .=  '
				<div class="disqus-post-sidebar-thread">
					<a class="disqus-post-sidebar-thread-link" href="' . $thread->link . '">' . $thread->title . '</a><div class="disqus-post-sidebar-thread-responses">' . $comments.' 
				</div></div>
			';

			//if ($_GET['debug']==1) echo '(thread->id='.$thread->id.')';
		}
		
		$thread_html .= '</div>';
	}	
	
	return $thread_html;	
}

/* DEPRECATED
function duplicatePostThreadCheck($threads, $pattern)
{
	$threads_c = array();
	if (!empty($threads))
	{
		foreach ($threads as $thread)
		{
			if (false == stristr($thread->url, $pattern))
			{
				$threads_c[] = $thread;
			}
		}
	}
	return $threads_c;
}
*/

function getDisqusThread($thread_id = null)
{


	global $DISQUS_API_2;
	
	//problem with Disqus API
	if (!isset($DISQUS_API_2)) return false;
	
	$params = array(
		'forum' => DISQUS_FORUM,
		'limit' => 1,
		'thread' => $thread_id
	);
	
	$threads = $DISQUS_API_2->threads->list($params);
	
	return (isset($threads[0])) ? $threads[0] : false;
}

function getDisqusMostRecentNonSchoolsThreads($limit = 1, $skipOne = 0 )
{
	$thread = false;	
	$threads = false;
	$sel_threads = array();
	
	//is disqus-sync enabled
	if (!function_exists('dsqSync_getDisqusCategoryIdByTitle'))
	{	
		return false;
	}
	
	//todo: it looks like this is broken, not returning an ID 
	//get disqus-schools cat id
	$schools_cat_id = dsqSync_getDisqusCategoryIdByTitle('Colleges');	
	
	//echo "schools_cat_id:".$schools_cat_id;

	//get some of the latest disqus comments to pick from
	$posts = getDisqusComments(25);
	
	if (!empty($posts))
	{
		$threads = array();
		foreach ($posts as $post)
		{
			if (!empty($post) && isset($post->thread) )
			{
				$thread = getDisqusThread($post->thread);

				//if ($thread && $thread->id != '553694085')//an invalid thread will return false
				if ($thread)
				{
					//todo: add dynamic exclusions and load array with all !discussion -- added 1273713 as stragler not removable in QA right now.
//	echo "INFO: ".$thread->category ."-".$schools_cat_id."-- ";
					if (false == ($thread->category == $schools_cat_id))
					{
						if (!in_array($thread->id, $sel_threads))
						{
							$threads[] = $thread;
							$sel_threads[] = $thread->id;
							if (count($threads) == ($limit + $skipOne)) break;
						}					
					}
				}
			}		
		}
	}
	
	return $threads;
}

function getDisqusMostRecentThread()
{

	//echo "getDisqusDiscussionSideBar";

	$thread = false;
	$last_post = getDisqusLastComment();
	
	if (!empty($last_post) && isset($last_post->thread))
	{
		$thread = getDisqusThread($last_post->thread);
	}
	return $thread;
}

function getDisqusSubfooter()
{
	$threads = getDisqusMostRecentNonSchoolsThreads(3);
	$thread = $threads[2];
	$comments = getDisqusThreadComments($thread->id, 1);
	
	//problem with Disqus
	if (false == $thread)
	{
		return getDisqusSubfooterDefault();
	}
	
	$html = 	'<div class="sfdc_header">';
	$html .= 		'<div class="powered-disqus">powered by <span class="disqus_logo">DISQUS</span></div><h3 class="join_discussion"><a href="/category/discussion/">Join the Discussion</a></h3>';
	$html .= 	'</div>';
	$html .= 	'<div class="sfdc_thread"><a href="' . $thread->link . '">' . $thread->title . '</a></div>';
	
	if (isset($comments[0]))
	{

		$html .= 	'<div class="sfdc_comment"><span class="sfdc_quotes">';
		
		//truncate message if necessary
		$message_char_limit = 200;
		$message = preg_replace('%\n%', '', $comments[0]->message);
		$message = (strlen($message) > $message_char_limit) ? substr($message, 0, $message_char_limit) . '...' : $message;
		
		$html .= 		$message;
		$html .= 		'</span><div class="sfdc_comment_author">';
		$html .= 			$comments[0]->author->display_name;
		$html .= 		'</div>';
		$html .= 	'</div>';
	}
	
	$html .= 	'<div class="sfdc_add_your_opinion">';
	$html .= 		'<a href="' . $thread->link . '">+ Add your opinion</a>';
	$html .= 	'</div>';
	
	$html .= '</article>';	
	
	return $html;
}

function getDisqusSubfooterDefault()
{
	return '<article id="subfooter_disqus_container" class="widget-1 widget-first widget widget_text widget_subfooter_disqus"> </article>';
}

class DisqusSubfooterWidget extends WP_Widget
{  
    function DisqusSubfooterWidget()
	{  
        parent::WP_Widget(false, 'Disqus Subfooter Widget');  
    }
	
	function form($instance)
	{  
		
    }
	
    function update($new_instance, $old_instance)
	{  
        // processes widget options to be saved  
        return $new_instance;  
    }
	
    function widget($args, $instance)
	{
		if (function_exists('dsq_ajax_callback'))
		{

        // outputs the content of the widget
			echo '<article id="subfooter_disqus_container" class="widget-1 widget-first widget widget_text widget_subfooter_disqus"></article>';
		}
		else echo getDisqusSubfooterDefault();
    }  
}  
register_widget('DisqusSubfooterWidget');

// remove_filter( 'the_content', 'wpautop' );
/* For testing only*/
/*
add_action('wp_head', 'show_template');
function show_template() {
    global $template;
    print_r($template);
}
*/
