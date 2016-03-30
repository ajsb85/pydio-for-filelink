/*
 * Pydio for Filelink is an extension for Mozilla Thunderbird that allows
 * you to easily send file attachments by uploading them to an storage service
 * that uses Pydio as file management system.
 *
 * Copyright (C) 2013  Diego Blanco Estévez
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var EXPORTED_SYMBOLS = [

                        "PYDIO_URL_ICON",
                        "PYDIO_URL_SETTINGS",
                        "PYDIO_URL_MANAGEMENT",

                        "PYDIO_ACTION_DELETE",
                        "PYDIO_ACTION_GET_CAPTCHA",
                        "PYDIO_ACTION_GET_SECURE_TOKEN",
                        "PYDIO_ACTION_GET_LOGIN_SEED",
                        "PYDIO_ACTION_GET_XML_REGISTRY",
                        "PYDIO_ACTION_LS",
                        "PYDIO_ACTION_LOGIN",
                        "PYDIO_ACTION_MKDIR",
                        "PYDIO_ACTION_NEXT_TO_REMOTE",
                        "PYDIO_ACTION_SHARE",
                        "PYDIO_ACTION_SWITCH_REPOSITORY",
                        "PYDIO_ACTION_TRIGGER_REMOTE_COPY",
                        "PYDIO_ACTION_UPLOAD",

                        "PYDIO_LOG_OK",
                        "PYDIO_WRONG_USER",
                        "PYDIO_ACCOUNT_LOCKED",
                        "PYDIO_ABORT_LOGIN",

                        "PYDIO_MAX_UPLOAD_CHUNK",

                        "PYDIO_DEFAULT_REPOSITORY",
                        "PYDIO_SHARED_FILES_REPOSITORY",

                        "PYDIO_UPLOAD_MAX_SIZE",

                        "PYDIO_ROOT_DIR",
                        "PYDIO_SHARED_FILES_DIR",
                        "PYDIO_UPLOAD_DIR",
                        "PYDIO_DELETE_DIR",
                        "PYDIO_UPLOAD_DIR_NAME",

                        "PYDIO_EXPIRATION",
                        "PYDIO_DOWNLOAD_LIMIT",

                        ];


// URLs
const PYDIO_URL_ICON       = "chrome://pydio/skin/icon.png";
const PYDIO_URL_SETTINGS   = "chrome://pydio/content/settings.xhtml";
const PYDIO_URL_MANAGEMENT = "chrome://pydio/content/management.xhtml";

// Actions
const PYDIO_ACTION_DELETE              = "delete";
const PYDIO_ACTION_GET_SECURE_TOKEN    = "get_secure_token";
const PYDIO_ACTION_GET_LOGIN_SEED      = "get_seed";
const PYDIO_ACTION_GET_XML_REGISTRY    = "get_xml_registry";
const PYDIO_ACTION_GET_CAPTCHA         = "get_captcha";
const PYDIO_ACTION_LOGIN               = "login";
const PYDIO_ACTION_LS                  = "ls";
const PYDIO_ACTION_MKDIR               = "mkdir";
const PYDIO_ACTION_NEXT_TO_REMOTE      = "next_to_remote";
const PYDIO_ACTION_SHARE               = "share";
const PYDIO_ACTION_SWITCH_REPOSITORY   = "switch_repository";
const PYDIO_ACTION_TRIGGER_REMOTE_COPY = "trigger_remote_copy";
const PYDIO_ACTION_UPLOAD              = "upload";

// Login results
const PYDIO_LOG_OK         = 1;
const PYDIO_WRONG_USER     = -1;
const PYDIO_ACCOUNT_LOCKED = -4;
const PYDIO_ABORT_LOGIN    = 999;

// Max upload chunk (4 Mb)
const PYDIO_MAX_UPLOAD_CHUNK = 4 * 1024 * 1024;

// Repository id by default
const PYDIO_DEFAULT_REPOSITORY = 0;

// Repository id for shared files
const PYDIO_SHARED_FILES_REPOSITORY = "ajxp_shared";

// Upload max filesize property
const PYDIO_UPLOAD_MAX_SIZE = "UPLOAD_MAX_SIZE";

// Account folders
const PYDIO_ROOT_DIR         = "/";
const PYDIO_SHARED_FILES_DIR = "/files";
const PYDIO_UPLOAD_DIR       = "/Thunderbird/";
const PYDIO_DELETE_DIR       = "/Thunderbird";
const PYDIO_UPLOAD_DIR_NAME  = "Thunderbird";

// Link expiration (in days)
const PYDIO_EXPIRATION     = 10;

// Number of allowed downloads
const PYDIO_DOWNLOAD_LIMIT = 10;
