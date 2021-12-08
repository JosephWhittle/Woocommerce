<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wc_reflection' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '/C4`?%S:#ac%oJ5|pUtdud>!)4l1=Ro9@z=JL`d<-IQBJm*8kq&)c$>A&gJs7@fg' );
define( 'SECURE_AUTH_KEY',  '%]9V_yG]VW=q2735C~!-2,`X0@Oo?X#jL.)t7y pMBF6hb-5!>1d^aM#>H5dAFCv' );
define( 'LOGGED_IN_KEY',    '83Q?X@QdQk2^{b$p^i?qg$v&tg{5-onn$y6(1@&:u$zktCvVs.WEcf^{cgXKd-4B' );
define( 'NONCE_KEY',        'S&Y2vE+$,s?XikR[DEa](AF_wr]3#Z-Pt3@QBYd:!gE(p,EY3G(kLuNLOfqk,geS' );
define( 'AUTH_SALT',        'wc2D-Nn5Bx!<!b;M-5(q0!|v<YHt}Nj*lCvp[N-O<4G>RWB%a0.FJXr6Mx!Gbv:^' );
define( 'SECURE_AUTH_SALT', ';P:i,KfxRFnFa^1^}Qu*iI&QM@3=x3[; wVi<xJY]|Cwff*{$G?<N`hDQ]yLpT#B' );
define( 'LOGGED_IN_SALT',   '[:jVEO73)uO(RY?p>cHyS?`3sE)d9=#JboBqo&[_}t8w 7JJ}X/bAoIgA/?b9r8o' );
define( 'NONCE_SALT',       'z{qOqk/KHLVh`Rd<sG?dHk%_v7_TeAg$Q?ce#W(7 ]:{l~IMattl[TRF|oc8E_y7' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
