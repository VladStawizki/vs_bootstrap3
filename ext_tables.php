<?php

defined('TYPO3_MODE') or die();

// TypoScript
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
$_EXTKEY,
'Configuration/TypoScript',
'Bootstrap 3'
);
