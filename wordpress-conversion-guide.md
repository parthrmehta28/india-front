# Converting India First to WordPress Theme

## Overview
This document outlines the steps needed to convert the current React-based India First website into a WordPress theme.

## Directory Structure
A WordPress theme requires the following structure:
```
theme-name/
├── style.css            # Main stylesheet with theme information
├── functions.php        # Theme functionality and setup
├── index.php            # Main template file
├── header.php           # Header template
├── footer.php           # Footer template
├── page.php             # Page template
├── single.php           # Single post template
├── archive.php          # Archive template
├── 404.php              # 404 error page
├── js/                  # JavaScript files
├── css/                 # CSS files
├── images/              # Image files
└── template-parts/      # Template parts for sections
    ├── content-hero.php
    ├── content-about.php
    ├── content-why.php
    ├── content-who.php
    ├── content-join.php
    └── content-contact.php
```

## Step 1: Create Theme Files

### style.css
```css
/*
Theme Name: India First
Theme URI: https://indiafirstmagazine.com
Author: Your Name
Author URI: https://yourwebsite.com
Description: A national movement designed to unite problem solvers, change-makers, and thought-leaders on a single platform.
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: india-first
*/

/* Import the existing CSS */
@import url('css/main.css');
```

### functions.php
```php
<?php
/**
 * India First Theme functions and definitions
 */

if (!function_exists('india_first_setup')) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     */
    function india_first_setup() {
        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        // Let WordPress manage the document title.
        add_theme_support('title-tag');

        // Enable support for Post Thumbnails on posts and pages.
        add_theme_support('post-thumbnails');

        // Register menu locations
        register_nav_menus(array(
            'primary' => esc_html__('Primary Menu', 'india-first'),
            'footer' => esc_html__('Footer Menu', 'india-first'),
        ));

        // Switch default core markup to output valid HTML5.
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');
    }
endif;
add_action('after_setup_theme', 'india_first_setup');

/**
 * Enqueue scripts and styles.
 */
function india_first_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('india-first-style', get_stylesheet_uri());
    
    // Enqueue Tailwind CSS
    wp_enqueue_style('india-first-tailwind', get_template_directory_uri() . '/css/tailwind.css');
    
    // Enqueue custom styles
    wp_enqueue_style('india-first-main', get_template_directory_uri() . '/css/main.css');
    
    // Enqueue JavaScript
    wp_enqueue_script('india-first-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0', true);
    
    // Add custom fonts
    wp_enqueue_style('india-first-fonts', 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
    
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'india_first_scripts');

/**
 * Register widget area.
 */
function india_first_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'india-first'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'india-first'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'india_first_widgets_init');

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Create custom post type for Join Movement form submissions
 */
function india_first_register_post_types() {
    // Register Movement Applications
    register_post_type('movement_application', array(
        'labels' => array(
            'name' => __('Applications', 'india-first'),
            'singular_name' => __('Application', 'india-first'),
        ),
        'public' => true,
        'has_archive' => false,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-groups',
        'supports' => array('title', 'editor', 'custom-fields'),
        'menu_position' => 20,
    ));
}
add_action('init', 'india_first_register_post_types');

/**
 * Create custom fields for movement applications
 */
function india_first_register_meta_boxes() {
    add_meta_box(
        'application_details',
        __('Application Details', 'india-first'),
        'india_first_application_details_callback',
        'movement_application'
    );
}
add_action('add_meta_boxes', 'india_first_register_meta_boxes');

function india_first_application_details_callback($post) {
    // Add nonce for security
    wp_nonce_field('india_first_save_meta_box_data', 'india_first_meta_box_nonce');

    // Get existing values
    $name = get_post_meta($post->ID, '_applicant_name', true);
    $email = get_post_meta($post->ID, '_applicant_email', true);
    $residence = get_post_meta($post->ID, '_applicant_residence', true);
    $occupation = get_post_meta($post->ID, '_applicant_occupation', true);
    $linkedin = get_post_meta($post->ID, '_applicant_linkedin', true);
    
    // Output fields
    echo '<p><label for="applicant_name">' . __('Full Name', 'india-first') . '</label><br>';
    echo '<input type="text" id="applicant_name" name="applicant_name" value="' . esc_attr($name) . '" size="40" /></p>';
    
    echo '<p><label for="applicant_email">' . __('Email', 'india-first') . '</label><br>';
    echo '<input type="email" id="applicant_email" name="applicant_email" value="' . esc_attr($email) . '" size="40" /></p>';
    
    echo '<p><label for="applicant_residence">' . __('Place of Residence', 'india-first') . '</label><br>';
    echo '<input type="text" id="applicant_residence" name="applicant_residence" value="' . esc_attr($residence) . '" size="40" /></p>';
    
    echo '<p><label for="applicant_occupation">' . __('Occupation', 'india-first') . '</label><br>';
    echo '<input type="text" id="applicant_occupation" name="applicant_occupation" value="' . esc_attr($occupation) . '" size="40" /></p>';
    
    echo '<p><label for="applicant_linkedin">' . __('LinkedIn Profile', 'india-first') . '</label><br>';
    echo '<input type="url" id="applicant_linkedin" name="applicant_linkedin" value="' . esc_attr($linkedin) . '" size="40" /></p>';
}

function india_first_save_meta_box_data($post_id) {
    // Check if nonce is set and valid
    if (!isset($_POST['india_first_meta_box_nonce']) || 
        !wp_verify_nonce($_POST['india_first_meta_box_nonce'], 'india_first_save_meta_box_data')) {
        return;
    }

    // Check if this is an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Check the user's permissions
    if (isset($_POST['post_type']) && 'movement_application' == $_POST['post_type']) {
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
    }

    // Save the data
    if (isset($_POST['applicant_name'])) {
        update_post_meta($post_id, '_applicant_name', sanitize_text_field($_POST['applicant_name']));
    }
    if (isset($_POST['applicant_email'])) {
        update_post_meta($post_id, '_applicant_email', sanitize_email($_POST['applicant_email']));
    }
    if (isset($_POST['applicant_residence'])) {
        update_post_meta($post_id, '_applicant_residence', sanitize_text_field($_POST['applicant_residence']));
    }
    if (isset($_POST['applicant_occupation'])) {
        update_post_meta($post_id, '_applicant_occupation', sanitize_text_field($_POST['applicant_occupation']));
    }
    if (isset($_POST['applicant_linkedin'])) {
        update_post_meta($post_id, '_applicant_linkedin', esc_url_raw($_POST['applicant_linkedin']));
    }
}
add_action('save_post', 'india_first_save_meta_box_data');

/**
 * Process form submission from front-end
 */
function india_first_process_form_submission() {
    if (isset($_POST['action']) && $_POST['action'] == 'join_movement_submission') {
        // Verify nonce
        if (!isset($_POST['india_first_form_nonce']) || 
            !wp_verify_nonce($_POST['india_first_form_nonce'], 'india_first_form_submit')) {
            wp_die('Security check failed. Please try again.');
        }
        
        // Get form data
        $name = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
        $email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
        $residence = isset($_POST['residence']) ? sanitize_text_field($_POST['residence']) : '';
        $occupation = isset($_POST['occupation']) ? sanitize_text_field($_POST['occupation']) : '';
        $linkedin = isset($_POST['linkedin']) ? esc_url_raw($_POST['linkedin']) : '';
        
        // Validate data
        if (empty($name) || empty($email)) {
            wp_redirect(add_query_arg('submission', 'error', wp_get_referer()));
            exit;
        }
        
        // Create post
        $post_id = wp_insert_post(array(
            'post_title'    => $name,
            'post_status'   => 'publish',
            'post_type'     => 'movement_application',
        ));
        
        if ($post_id) {
            // Store custom fields
            update_post_meta($post_id, '_applicant_name', $name);
            update_post_meta($post_id, '_applicant_email', $email);
            update_post_meta($post_id, '_applicant_residence', $residence);
            update_post_meta($post_id, '_applicant_occupation', $occupation);
            update_post_meta($post_id, '_applicant_linkedin', $linkedin);
            
            // Send email notification
            $to = get_option('admin_email');
            $subject = 'New Movement Application: ' . $name;
            $message = "A new application has been submitted:\n\n";
            $message .= "Name: $name\n";
            $message .= "Email: $email\n";
            $message .= "Residence: $residence\n";
            $message .= "Occupation: $occupation\n";
            $message .= "LinkedIn: $linkedin\n\n";
            $message .= "View in admin: " . admin_url('post.php?post=' . $post_id . '&action=edit');
            
            wp_mail($to, $subject, $message);
            
            // Redirect with success message
            wp_redirect(add_query_arg('submission', 'success', wp_get_referer()));
            exit;
        } else {
            wp_redirect(add_query_arg('submission', 'error', wp_get_referer()));
            exit;
        }
    }
}
add_action('admin_post_nopriv_join_movement_submission', 'india_first_process_form_submission');
add_action('admin_post_join_movement_submission', 'india_first_process_form_submission');
```

### index.php
```php
<?php
/**
 * The main template file
 */

get_header();
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php get_template_part('template-parts/content', 'hero'); ?>
        <?php get_template_part('template-parts/content', 'about'); ?>
        <?php get_template_part('template-parts/content', 'why'); ?>
        <?php get_template_part('template-parts/content', 'who'); ?>
        <?php get_template_part('template-parts/content', 'join'); ?>
        <?php get_template_part('template-parts/content', 'contact'); ?>
    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer();
```

### header.php
```php
<?php
/**
 * The header for our theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="<?php bloginfo('name'); ?> - <?php bloginfo('description'); ?>" />
    <meta property="og:description" content="A bold new movement exploring India's politics, culture, economy, and global position" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>" />
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/images/hero-bg.jpg" />
    
    <?php wp_head(); ?>
</head>

<body <?php body_class('font-poppins text-darkGray bg-white'); ?>>
<?php wp_body_open(); ?>

<header class="fixed w-full z-50 transition-all duration-300 bg-white/90 py-3" id="masthead">
    <div class="container mx-auto px-4 flex items-center justify-between">
        <div class="flex items-center">
            <div class="mr-2">
                <div class="flex flex-col h-8">
                    <div class="h-1/3 bg-saffron"></div>
                    <div class="h-1/3 bg-white flex justify-center items-center">
                        <div class="w-4 h-4 rounded-full border border-navy"></div>
                    </div>
                    <div class="h-1/3 bg-indian-green"></div>
                </div>
            </div>
            <h1 class="text-2xl font-playfair font-bold">
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <span class="text-navy">India</span> <span class="text-saffron">First</span>
                </a>
            </h1>
        </div>
        
        <nav class="hidden md:flex space-x-8 items-center" id="site-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_id'        => 'primary-menu',
                'container'      => false,
                'menu_class'     => '',
                'items_wrap'     => '%3$s',
                'walker'         => new India_First_Nav_Walker(),
            ));
            ?>
        </nav>
        
        <button class="md:hidden flex items-center" id="mobile-menu-toggle" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>
    
    <!-- Mobile Menu -->
    <div class="md:hidden bg-white w-full border-t border-gray-200 hidden" id="mobile-menu">
        <div class="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_id'        => 'mobile-menu-items',
                'container'      => false,
                'menu_class'     => 'flex flex-col space-y-3',
                'walker'         => new India_First_Mobile_Nav_Walker(),
            ));
            ?>
        </div>
    </div>
</header>
```

### footer.php
```php
<?php
/**
 * The template for displaying the footer
 */
?>

<footer class="bg-navy text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="md:col-span-2">
                <div class="flex items-center mb-4">
                    <div class="mr-2">
                        <div class="flex flex-col h-6">
                            <div class="h-1/3 bg-saffron"></div>
                            <div class="h-1/3 bg-white flex justify-center items-center">
                                <div class="w-3 h-3 rounded-full border border-navy"></div>
                            </div>
                            <div class="h-1/3 bg-indian-green"></div>
                        </div>
                    </div>
                    <h2 class="text-xl font-playfair font-bold">
                        <span class="text-white">India</span> <span class="text-saffron">First</span>
                    </h2>
                </div>
                <p class="mb-6">
                    A bold new voice in Indian journalism, delivering insightful analysis on politics, economy, society, and culture, with a focus on India's evolving role in the global landscape.
                </p>
                <div class="flex gap-4 mb-8">
                    <a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                    <a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'menu_id'        => 'footer-menu',
                    'container'      => false,
                    'menu_class'     => 'space-y-2',
                    'link_class'     => 'hover:text-saffron transition-colors',
                ));
                ?>
            </div>
            
            <div>
                <h3 class="text-lg font-bold mb-4">Subscribe to Newsletter</h3>
                <p class="mb-4">Stay updated with our latest articles and announcements.</p>
                <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" class="flex flex-col space-y-3">
                    <input type="hidden" name="action" value="newsletter_subscription">
                    <?php wp_nonce_field('newsletter_subscription', 'newsletter_nonce'); ?>
                    
                    <div>
                        <input type="email" name="email" placeholder="Your email address" required
                               class="px-4 py-2 w-full bg-white/10 border border-white/30 rounded-md text-white placeholder-white focus:ring-saffron">
                    </div>
                    
                    <button type="submit"
                            class="bg-saffron hover:bg-saffron/90 text-white py-2 transition-all hover:translate-y-[-2px] hover:shadow-lg">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        
        <div class="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
            <div class="flex justify-center mt-2 space-x-4">
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" class="hover:text-white transition-colors">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<script>
    // Mobile menu toggle
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', function() {
                if (mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.remove('hidden');
                    menuToggle.setAttribute('aria-label', 'Close menu');
                    menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
                } else {
                    mobileMenu.classList.add('hidden');
                    menuToggle.setAttribute('aria-label', 'Open menu');
                    menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>';
                }
            });
            
            // Close menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    menuToggle.setAttribute('aria-label', 'Open menu');
                    menuToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>';
                });
            });
        }
        
        // Navbar scroll effect
        function handleScroll() {
            const header = document.getElementById('masthead');
            if (window.scrollY > 20) {
                header.classList.remove('py-3', 'bg-white/90');
                header.classList.add('py-2', 'bg-white', 'shadow-md');
            } else {
                header.classList.remove('py-2', 'bg-white', 'shadow-md');
                header.classList.add('py-3', 'bg-white/90');
            }
        }
        
        window.addEventListener('scroll', handleScroll);
    });
</script>
</body>
</html>
```

## Step 2: Convert Component Sections to Template Parts

### template-parts/content-hero.php
```php
<?php
/**
 * Template part for displaying hero section
 */
?>

<section id="home" class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <!-- Background image with overlay -->
    <div class="absolute inset-0 z-0">
        <img 
            src="<?php echo get_template_directory_uri(); ?>/images/hero-bg.jpg" 
            alt="India landscape with historic architecture" 
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10 text-center">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl md:text-6xl font-playfair font-bold text-white text-shadow mb-6 animate-fadeIn">
                <?php echo get_theme_mod('hero_title', 'Be the Voice That Builds India'); ?>
            </h2>
            <p class="text-xl md:text-2xl text-white mb-8 animate-fadeIn animation-delay-200">
                <?php echo get_theme_mod('hero_subtitle', 'Join a Movement of Visionaries Driving Inclusive, Sustainable, and Growth-Oriented Change'); ?>
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn animation-delay-400">
                <a href="#join" 
                   class="bg-saffron hover:bg-saffron/90 text-white px-8 py-3 rounded-md font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg inline-block">
                    <?php echo get_theme_mod('hero_button_text', 'Join the Movement'); ?>
                </a>
            </div>
        </div>
    </div>
    
    <div class="absolute bottom-10 left-0 right-0 text-center z-10 animate-bounce">
        <a href="#about" class="text-white inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </a>
    </div>
</section>
```

### Other template-parts files
In the same way, you would convert each React component to a corresponding PHP template part.

## Step 3: Convert CSS and JavaScript
1. Extract your CSS from the React components and combine them into a main CSS file
2. Use WordPress's enqueue system to load the CSS and JavaScript

## Step 4: Implement WordPress Customization API
Add theme customization options to allow site owners to update content through the WordPress admin interface.

## Step 5: Create Custom Form Handling
For the "Join the Movement" form, implement server-side form handling using WordPress hooks.

## Implementation Timeline
1. Basic WordPress theme structure (1-2 days)
2. Template conversion from React components (2-3 days)
3. Style and functionality implementation (2-3 days)
4. Custom post types and form handling (1-2 days)
5. WordPress customization API integration (1-2 days)
6. Testing and refinement (2-3 days)

Total: 9-15 days depending on complexity and requirements