<?php
$EM_CONF[$_EXTKEY] = array(
    'title' => 'Bootstrap Version 3',
    'description' => 'Add all Bootstrap 3 Dependencies for Frontend',
    'category' => 'fe',
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'author' => 'Vlad Stawizki',
    'author_email' => 'vlad.stawizki@gmail.com',
    'author_company' => 'Vlad Stawizki',
    'version' => '1.0.0',
    'constraints' => array(
        'depends' => array(
            'typo3' => '7.6.0-7.6.99',
        ),
        'conflicts' => array(),
        'suggests' => array(),
    ),
);
