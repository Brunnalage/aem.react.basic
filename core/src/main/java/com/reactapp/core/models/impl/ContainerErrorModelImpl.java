/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models.impl;

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.ContainerErrorModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    ContainerErrorModel.class,
    ComponentExporter.class
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ContainerErrorModelImpl
    implements ContainerErrorModel
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String paragraph;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorParagraph;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorButtonText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String colorButton;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image errorImage;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("titleText")
    public String getTitleText() {
        return titleText;
    }

    @Override
    @JsonProperty("colorTitle")
    public String getColorTitle() {
        return colorTitle;
    }

    @Override
    @JsonProperty("paragraph")
    public String getParagraph() {
        return paragraph;
    }

    @Override
    @JsonProperty("colorParagraph")
    public String getColorParagraph() {
        return colorParagraph;
    }

    @Override
    @JsonProperty("buttonText")
    public String getButtonText() {
        return buttonText;
    }

    @Override
    @JsonProperty("colorButtonText")
    public String getColorButtonText() {
        return colorButtonText;
    }

    @Override
    @JsonProperty("colorButton")
    public String getColorButton() {
        return colorButton;
    }

    @Override
    @JsonProperty("errorImage")
    public Image getErrorImage() {
        return errorImage;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
